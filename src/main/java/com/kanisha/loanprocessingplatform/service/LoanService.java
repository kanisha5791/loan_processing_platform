
package com.kanisha.loanprocessingplatform.service;

import com.kanisha.loanprocessingplatform.entity.Loan;
import com.kanisha.loanprocessingplatform.respository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }
}
