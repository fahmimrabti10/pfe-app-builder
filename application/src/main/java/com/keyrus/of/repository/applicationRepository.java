package com.keyrus.of.repository;

import com.keyrus.of.model.application;
import io.quarkus.mongodb.panache.PanacheMongoRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class applicationRepository implements PanacheMongoRepository<application> {
}
