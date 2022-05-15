package com.springboot.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long money;
    private long deposit;
    private long transfer; 
    private long accountNumber;

    public Transaction() {
        
    }

    
    public long getMoney() {
        return money;
    }


    public void setMoney(long money, long deposit,long transfer) {
        this.money = money + deposit - transfer;
    }


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getDeposit() {
        return deposit;
    }
    public void setDeposit(long deposit) {
        this.deposit = deposit;
    }
    public long getTransfer() {
        return transfer;
    }
    public void setTransfer(long transfer) {
        this.transfer = transfer;
    }
    public long getAccountNumber() {
        return accountNumber;
    }
    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }

    

}
