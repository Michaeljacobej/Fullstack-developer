package com.springboot.backend.repository;

import com.springboot.backend.model.ProductList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductListRepository extends JpaRepository<ProductList, Long>{
    
}
