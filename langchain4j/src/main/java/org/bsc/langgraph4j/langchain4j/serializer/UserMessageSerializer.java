package org.bsc.langgraph4j.langchain4j.serializer;

import dev.langchain4j.data.message.UserMessage;
import org.bsc.langgraph4j.serializer.Serializer;

import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.util.Optional;

class UserMessageSerializer implements Serializer<UserMessage> {
    @Override
    public void write(UserMessage object, ObjectOutput out) throws IOException {

        if( object.hasSingleText() ) {
            out.writeUTF( object.singleText() );
            writeUTFNullable( object.name(), out);
            return;
        }
        throw new IllegalArgumentException( "Unsupported content type: " + object.type() );
    }

    @Override
    public UserMessage read(ObjectInput in) throws IOException, ClassNotFoundException {
        String text = in.readUTF();
        return readUTFNullable(in)
                .map( name -> UserMessage.from(name, text) ).orElseGet( () -> UserMessage.from(text) );

    }
}
