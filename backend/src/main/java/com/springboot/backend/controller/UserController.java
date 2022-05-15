package com.springboot.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.springboot.backend.exception.ResourceNotFoundException;
import com.springboot.backend.model.CustommerAcount;

import com.springboot.backend.model.ProductCategories;
import com.springboot.backend.model.ProductList;
import com.springboot.backend.model.Transaction;
import com.springboot.backend.model.User;
import com.springboot.backend.repository.CustommerAcountRepository;

import com.springboot.backend.repository.ProductCategoriesRepository;
import com.springboot.backend.repository.ProductListRepository;
import com.springboot.backend.repository.TransactionRepository;
import com.springboot.backend.repository.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
        @Autowired
        private UserRepository userRepository;


        // for signup create username
        @PostMapping("/signup")
        public User createuUser(@RequestBody User user){
            return userRepository.save(user);
    
        }

        // // for login getting data from my sql
        @GetMapping("/login")    
        public List<User> getAllUsers(){
            return userRepository.findAll();

        }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // for product list
        // for create product list
        
        @Autowired
        private ProductListRepository productListRepository;
        
        @PostMapping("/createproductlist")
        public ProductList createProductList(@RequestBody ProductList productList) {
            return productListRepository.save(productList);
    
        }
        
        //get all product list
        @GetMapping("/getallproductlist")
        public List<ProductList> getAllProductLists(){
            return productListRepository.findAll();
        }		

        // get product list by id
        @GetMapping("/productlist/{id}")
        public ResponseEntity<ProductList> getProductListById(@PathVariable Long id) {
            ProductList productList = productListRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("productlist not exist with id :" + id));
            return ResponseEntity.ok(productList);
        }

        // update product list

        @PutMapping("/productlist/{id}")
        public ResponseEntity<ProductList> updateProductList(@PathVariable Long id, @RequestBody ProductList productListDetails){
            ProductList productList = productListRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("productlist not exist with id :" + id));
            
            productList.setProduct(productListDetails.getProduct());
            productList.setCategory(productListDetails.getCategory());
            productList.setDescription(productListDetails.getDescription());
            
            ProductList updatedProductList = productListRepository.save(productList);
            return ResponseEntity.ok(updatedProductList);
        }

        
        // delete employee rest api
	    @DeleteMapping("/productlist/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteProductList(@PathVariable Long id){
		ProductList productList = productListRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("productlist not exist with id :" + id));
		
		productListRepository.delete(productList);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////


        // for product category
        
        @Autowired
        private ProductCategoriesRepository productCategoriesRepository;

        // for product category
        // for create product category
        @PostMapping("/createproductcategory")
        public ProductCategories createProductCategories(@RequestBody ProductCategories productCategories) {
            return productCategoriesRepository.save(productCategories);
    
        }
        
        //get all product category
        @GetMapping("/getallproductcategory")
        public List<ProductCategories> getAllProductCategories(){
            return productCategoriesRepository.findAll();
        }		

        // get product category by id
        @GetMapping("/productcategory/{id}")
        public ResponseEntity<ProductCategories> getProductCategoryById(@PathVariable Long id) {
            ProductCategories productCategories = productCategoriesRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("productcategory not exist with id :" + id));
            return ResponseEntity.ok(productCategories);
        }

        // update product category

        @PutMapping("/productcategory/{id}")
        public ResponseEntity<ProductCategories> updateProductCategory(@PathVariable Long id, @RequestBody ProductCategories productCategoryDetails){
            ProductCategories productCategories = productCategoriesRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("productcategory not exist with id :" + id));
            
            productCategories.setCategory(productCategoryDetails.getCategory());
            productCategories.setDescription(productCategoryDetails.getDescription());
            
            ProductCategories updatedProductcCategories = productCategoriesRepository.save(productCategories);
            return ResponseEntity.ok(updatedProductcCategories);
        }

        
        // delete product category
	    @DeleteMapping("/productcategory/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteProductCategory(@PathVariable Long id){
		ProductCategories productCategories = productCategoriesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("productcategory not exist with id :" + id));
		
		productCategoriesRepository.delete(productCategories);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



        // for Customer Account
        
        @Autowired
        private CustommerAcountRepository customerAcountRepository;

        // for custommer
        // for create custommer
        @PostMapping("/createcustommer")
        public CustommerAcount createCustommerAccount(@RequestBody CustommerAcount custommerAcount) {
            return customerAcountRepository.save(custommerAcount);
    
        }
        
        //get all product list
        @GetMapping("/getallcustommer")
        public List<CustommerAcount> getAllCustommerAcount(){
            return customerAcountRepository.findAll();
        }		

        // get product list by id
        @GetMapping("/custommer/{id}")
        public ResponseEntity<CustommerAcount> getCustommerAccountById(@PathVariable Long id) {
            CustommerAcount custommerAcount = customerAcountRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("custommeraccount not exist with id :" + id));
            return ResponseEntity.ok(custommerAcount);
        }

        // update product list
	
        @PutMapping("/custommer/{id}")
        public ResponseEntity<CustommerAcount> updateCustommerAccount(@PathVariable Long id, @RequestBody CustommerAcount custommerAccountDetails){
            CustommerAcount custommerAcount = customerAcountRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("custommeraccount not exist with id :" + id));
            
            custommerAcount.setUser(custommerAccountDetails.getUser());
            custommerAcount.setEmail(custommerAccountDetails.getEmail());
            custommerAcount.setStatus(custommerAccountDetails.getStatus());
            custommerAcount.setRole(custommerAccountDetails.getRole());
            
            CustommerAcount updatedCustommerAcount = customerAcountRepository.save(custommerAcount);
            return ResponseEntity.ok(updatedCustommerAcount);
        }

        
        // delete employee rest api
	    @DeleteMapping("/custommer/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteCustommerAccount(@PathVariable Long id){
		CustommerAcount custommerAcount = customerAcountRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("custommeraccount not exist with id :" + id));
		
		customerAcountRepository.delete(custommerAcount);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
    
        // for Transfer
        
        @Autowired
        private TransactionRepository transactionRepository;

        // for Transfer
        // for create transfer
        @PostMapping("/createtransaction")
        public Transaction createTransaction(@RequestBody Transaction transaction) {
            return transactionRepository.save(transaction);
    
        }
        
        //get all transfer
        @GetMapping("/getalltransaction")
        public List<Transaction> getAllTransfer(){
            return transactionRepository.findAll();
        }		

        // get transfer by id
        @GetMapping("/transaction/{id}")
        public ResponseEntity<Transaction> getTransferById(@PathVariable Long id) {
            Transaction transaction = transactionRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("transfer not exist with id :" + id));
            return ResponseEntity.ok(transaction);
        }

        // update transfer
	
        @PutMapping("/transaction/{id}")
        public ResponseEntity<Transaction> updateTransaction(@PathVariable Long id, @RequestBody Transaction transactionDetails){
            Transaction transaction = transactionRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("transfer not exist with id :" + id));
            
                    transaction.setMoney(transactionDetails.getMoney(),transactionDetails.getDeposit(),transactionDetails.getTransfer());
                    transaction.setDeposit(transactionDetails.getDeposit());
                    transaction.setTransfer(transactionDetails.getTransfer());
                    transaction.setAccountNumber(transactionDetails.getAccountNumber());
                   
                   
            Transaction updatedTransaction = transactionRepository.save(transaction);
            return ResponseEntity.ok(updatedTransaction);
        }

        
        // delete transfer
	    @DeleteMapping("/transaction/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteTransaction(@PathVariable Long id){
		Transaction transaction = transactionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("transfer not exist with id :" + id));
		
        transactionRepository.delete(transaction);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
    
}


