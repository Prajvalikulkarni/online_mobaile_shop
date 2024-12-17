package payment1.payment.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import payment1.payment.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
