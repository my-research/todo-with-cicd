package com.example.jenkinscicdtodo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/todos", produces = "application/json")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getTodos() {
        return ResponseEntity.ok().body(todoService.getTodos());
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody TodoRequestData todoRequestData) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(todoService.createTodo(todoRequestData));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteTodo(@PathVariable Long id) throws Exception {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(todoService.deleteTodo(id));
    }
}
