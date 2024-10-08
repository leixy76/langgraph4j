package org.bsc.langgraph4j.serializer;

import lombok.extern.slf4j.Slf4j;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class ListSerializer extends BaseSerializer<List<Object>> {

    public static Serializer<List<Object>> of() {
        return new ListSerializer();
    }

    protected ListSerializer() {}
    @Override
    public void write(List<Object> object, ObjectOutput out) throws IOException {

        try( ByteArrayOutputStream baos = new ByteArrayOutputStream() ) {
            int expectedSize = object.size();
            int actualSize = 0;

            final ObjectOutputStream outStream = new ObjectOutputStream( baos );
            for( Object value : object ) {
                try {
                    writeObjectWithSerializer( value, outStream );

                    ++actualSize;
                } catch (IOException ex) {
                    log.error( "Error writing collection value", ex );
                    throw ex;
                }
            }
            out.writeInt( expectedSize );
            out.writeInt( actualSize ); // actual size
            if( expectedSize > 0 && actualSize > 0 ) {
                byte[] data = baos.toByteArray();
                out.writeInt( data.length );
                out.write( data );
            }

        }

    }

    @Override
    public List<Object> read(ObjectInput in) throws IOException, ClassNotFoundException {
        List<Object> result = new ArrayList<>();

        int expectedSize = in.readInt();
        int actualSize = in.readInt();

        if( expectedSize > 0 && actualSize > 0 ) {
            if (expectedSize != actualSize) {
                final String message = String.format("Deserialize collection: Expected size %d and actual size %d do not match!", expectedSize, actualSize);
                log.error(message);
                throw new IOException(message);
            }

            int byteLen = in.readInt();
            byte[] bytes = new byte[byteLen];
            in.readFully(bytes);

            try (ByteArrayInputStream bais = new ByteArrayInputStream(bytes)) {
                ObjectInputStream inStream = new ObjectInputStream(bais);

                for (int i = 0; i < actualSize; i++) {

                    Object value = readObjectWithSerializer(inStream);

                    result.add(value);

                }
            }
        }
        return result;
    }
}
