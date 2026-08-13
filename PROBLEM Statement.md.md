## **PROBLEM Statement**



###### &#x20;1. Title



Digital Lending and Loan Processing Platform



&#x20;2. Domain



FinTech / Digital Lending



3\. Who is the user?

Customer

\- Register and login to the platform

\- Apply for a loan online

\- Upload required documents

\- Check loan status

\- View repayment details



&#x20;Admin / Loan Officer

\- View and manage customer loan applications

\- Verify application details and documents

\- Approve or reject loan applications

\- Update loan status

\- Monitor repayments



4\. What problem are we solving?



Traditional loan processing can require customers to visit a bank branch multiple times for application, document submission, status enquiries, and repayment information.

Customers may also find it difficult to track their loan application status and understand the progress of their application.

Loan officers need a centralized system to manage customer details, applications, documents, loan approvals, and repayments efficiently.

Our platform aims to provide a centralized digital loan processing system that reduces unnecessary physical visits and makes the loan process easier to track and manage.



5\. Proposed Solution



We propose a web-based Digital Lending and Loan Processing Platform where customers can apply for loans and manage the major steps of the loan process online.

The system allows customers to submit loan applications, upload documents, check application status, and view repayment information.

Admins or loan officers can review applications, verify details, approve or reject loans, and manage loan status and repayment records.

The platform will provide a simple and centralized workflow for managing the complete basic loan-processing process.



6\. Core Entities / Database Tables



1\. Users

2\. Loan Applications

3\. Loans

4\. Documents

5\. Repayments

6\. Notifications



These entities are related to manage customers, loan applications, documents, loan details, repayments, and notifications.



7\. User Roles \& Permissions



Customer

\- Register and login

\- Apply for a loan

\- Upload documents

\- View loan details

\- Track application status

\- View repayment information



&#x20;Admin / Loan Officer

\- Login to admin system

\- View customer applications

\- Verify application details

\- Approve or reject loans

\- Update loan status

\- Manage repayment information



&#x20;8. Success Criteria



\- A customer should be able to register and login successfully.

\- A customer should be able to submit a loan application online.

\- A customer should be able to upload required documents.

\- A customer should be able to track the loan application status.

\- An admin should be able to review and update loan applications.

\- Approved loans should be recorded and linked to the customer.

\- Repayment information should be available to the customer.

\- The system should maintain the relationship between customers, applications, loans, documents, and repayments.



9\. Out of Scope



The MVP will not include real bank transactions or real-money payment processing.



Advanced credit scoring, automated fraud detection, and AI-based loan decision-making are also outside the initial MVP scope and can be added as future enhancements.



&#x20;10. Chosen Track



Java (Spring Boot)

