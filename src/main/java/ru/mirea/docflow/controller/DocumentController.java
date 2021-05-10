package ru.mirea.docflow.controller;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.mirea.docflow.dto.DocumentDto;
import ru.mirea.docflow.entity.Document;
import ru.mirea.docflow.service.DocumentService;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class DocumentController {

    private final DocumentService documentService;


    @PostMapping(value = "/document")
    public Document createDocument(@RequestBody DocumentDto document, @RequestParam("user_id") int userId) {
        return documentService.saveDocument(document, userId);
    }

    @SneakyThrows
    @PostMapping(value = "/document/{id}/upload")
    public void uploadFile(@RequestPart("file") MultipartFile file, @PathVariable("id") int documentId) {
        documentService.uploadFile(documentId, file.getBytes());
    }

    @GetMapping(value = "/document/{id}")
    public DocumentDto getDocInfo(@PathVariable("id") int docId) {
        return documentService.GetDocumentInfo(docId);
    }

    @GetMapping(value = "/document/{id}/data")
    public ResponseEntity<byte[]> getDocData(@PathVariable("id") int docId) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/pdf");
        return
                ResponseEntity.ok().headers(headers).body(documentService.getDocumentData(docId));

    }

    @PutMapping(value = "/user/{userId}/document/{docId}")
    public void addDocument(@PathVariable("userId") int userId, @PathVariable("docId") int docId) {
        documentService.addDocument(userId, docId);
    }

    @GetMapping(value = "/user/{userId}/document")
    public List<DocumentDto> getUserDocuments(@PathVariable("userId") int userId) {
        return documentService.getUserDocuments(userId);
    }

    @DeleteMapping(value = "/document/{id}")
    public void deleteDocument(@PathVariable("id") int docId) {
        documentService.deleteDocument(docId);
    }

}
