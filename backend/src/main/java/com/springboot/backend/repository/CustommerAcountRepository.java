package com.springboot.backend.repository;

import com.springboot.backend.model.CustommerAcount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustommerAcountRepository extends JpaRepository<CustommerAcount,Long>{
    

    
}
