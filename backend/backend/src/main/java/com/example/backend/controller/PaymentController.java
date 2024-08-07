package com.example.backend.controller;

import com.example.backend.model.PaymentModel;
import com.example.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/payments")
    public PaymentModel submitMessage(@RequestBody PaymentModel paymentModel) {
        return paymentService.saveMessage(paymentModel);
    }

    @GetMapping("/payments")
    public List<PaymentModel> getAllMessages() {
        return paymentService.getAllMessages();
    }

    @GetMapping("/payments/{id}")
    public PaymentModel getMessageById(@PathVariable Long id) {
        return paymentService.getMessageById(id);
    }

    @PutMapping("/payments/{id}")
    public PaymentModel updateMessage(@PathVariable Long id, @RequestBody PaymentModel paymentModel) {
        return paymentService.updateMessage(id, paymentModel);
    }

    @DeleteMapping("/pay/{id}")
    public void deleteMessage(@PathVariable Long id) {
        paymentService.deleteMessage(id);
    }
}