package com.example.backend.controller;

import com.example.backend.model.ContactModel;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/contacts")
    public ContactModel submitMessage(@RequestBody ContactModel contactModel) {
        return contactService.saveMessage(contactModel);
    }

    @GetMapping("/contacts")
    public List<ContactModel> getAllMessages() {
        return contactService.getAllMessages();
    }

    @GetMapping("/contacts/{id}")
    public ContactModel getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }

    @PutMapping("/contacts/{id}")
    public ContactModel updateMessage(@PathVariable Long id, @RequestBody ContactModel contactModel) {
        return contactService.updateMessage(id, contactModel);
    }

    @DeleteMapping("/contacts/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}