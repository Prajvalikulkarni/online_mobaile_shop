package payment1.payment.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import payment1.payment.model.Payment;
import payment1.payment.repository.PaymentRepository;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        try {
            return paymentRepository.save(payment);
        } catch (Exception e) {
            e.printStackTrace();  // Log the error
            throw new RuntimeException("Failed to save payment");
        }
    }

    public List<Payment> getAllPayments() {
        try {
            return paymentRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();  // Log the error
            throw new RuntimeException("Failed to fetch payments");
        }
    }

}
