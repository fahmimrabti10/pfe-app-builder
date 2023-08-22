package com.keyrus.of.model;

import io.quarkus.runtime.annotations.RegisterForReflection;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;

import java.util.Date;
@RegisterForReflection
@Data
@AllArgsConstructor
@NoArgsConstructor
public class application {
    @BsonId
    private ObjectId id;

    private String  AppName;

    private Date createdAt;
    private Date updatedAt;

    private String  userId ;



}
