package com.museoGlobal.MuseoGlobal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.museoGlobal.MuseoGlobal.documentos.Obras;

public interface ObraRepository extends MongoRepository<Obras, Integer>{

}
