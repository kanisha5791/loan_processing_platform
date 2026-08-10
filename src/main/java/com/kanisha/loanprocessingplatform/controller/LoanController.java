package com.kanisha.loanprocessingplatform.controller;

import com.kanisha.loanprocessingplatform.entity.Loan;
import com.kanisha.loanprocessingplatform.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan")
@CrossOrigin(origins = "http://localhost:5173")
public class LoanController {

    @Autowired
    private LoanService loanService;

    // Get all loans
    @GetMapping
    public Iterable<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    // Get one customer's loan using Loan ID + Phone
    @GetMapping("/customer/{id}")
    public ResponseEntity<Loan> getCustomerLoan(
            @PathVariable Long id,
            @RequestParam String phone) {

        Loan loan = loanService.getLoanForCustomer(id, phone);

        if (loan == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(loan);
    }
}