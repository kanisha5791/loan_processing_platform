package com.kanisha.loanprocessingplatform.respository;

import com.kanisha.loanprocessingplatform.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {

}