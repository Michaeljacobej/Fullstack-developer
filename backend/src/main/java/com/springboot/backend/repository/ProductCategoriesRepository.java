package com.springboot.backend.repository;

import com.springboot.backend.model.ProductCategories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoriesRepository extends JpaRepository<ProductCategories,Long> {
    
}
