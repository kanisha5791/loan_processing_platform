package com.kanisha.loanprocessingplatform.controller;

import com.kanisha.loanprocessingplatform.entity.Loan;
import com.kanisha.loanprocessingplatform.respository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan")
public class LoanController {

    @Autowired
    private LoanRepository loanRepository;

    @PostMapping
    public Loan saveLoan(@RequestBody Loan loan) {
        return loanRepository.save(loan);
    }

    @GetMapping
    public Iterable<Loan> getAllLoans() {
        return loanRepository.findAll();
    }
}