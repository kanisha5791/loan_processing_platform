package com.kanisha.loanprocessingplatform.respository;

import com.kanisha.loanprocessingplatform.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    List<Loan> findByCustomerNameContainingIgnoreCase(String customerName);

    Optional<Loan> findByIdAndPhone(Long id, String phone);
}