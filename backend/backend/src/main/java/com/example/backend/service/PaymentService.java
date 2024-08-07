package com.example.backend.service;

import com.example.backend.model.PaymentModel;
import com.example.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentModel saveMessage(PaymentModel paymentModel) {
        return paymentRepository.save(paymentModel);
    }

    public List<PaymentModel> getAllMessages() {
        return paymentRepository.findAll();
    }

    public PaymentModel getMessageById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public PaymentModel updateMessage(Long id, PaymentModel paymentModel) {
        Optional<PaymentModel> existingMessageOpt = paymentRepository.findById(id);
        if (existingMessageOpt.isPresent()) {
            PaymentModel existingMessage = existingMessageOpt.get();
            existingMessage.setName(paymentModel.getName());
            existingMessage.setEmail(paymentModel.getEmail());
            existingMessage.setPhone(paymentModel.getPhone());
            existingMessage.setAddress(paymentModel.getAddress());
            existingMessage.setMessage(paymentModel.getMessage());
            return paymentRepository.save(existingMessage);
        } else {
            return null;
        }
    }

    public void deleteMessage(Long id) {
        paymentRepository.deleteById(id);
    }
}