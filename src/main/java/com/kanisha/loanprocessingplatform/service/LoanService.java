package com.kanisha.loanprocessingplatform.service;

import com.kanisha.loanprocessingplatform.entity.Loan;
import com.kanisha.loanprocessingplatform.respository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public Iterable<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan getLoanForCustomer(Long id, String phone) {
        return loanRepository.findByIdAndPhone(id, phone)
                .orElse(null);
    }
}