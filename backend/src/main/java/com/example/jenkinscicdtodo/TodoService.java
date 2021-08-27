package com.example.jenkinscicdtodo;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TodoService {
    private final TodoRepository todoRepository;
    private final ModelMapper modelMapper;

    public TodoService(TodoRepository todoRepository, ModelMapper modelMapper) {
        this.todoRepository = todoRepository;
        this.modelMapper = modelMapper;
    }

    /**
     * 모든 todo item 을 반환한다.
     *
     * @return List
     */
    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    /**
     * content 를 받고 todo 를 저장한다.
     *
     * @param todoRequestData
     * @return 생성된 Todo
     */
    public Todo createTodo(TodoRequestData todoRequestData) {
        return todoRepository.save(modelMapper.map(todoRequestData, Todo.class));
    }

    /**
     * id 를 받고 todo 를 삭제한다.
     *
     * @param todoId todo id
     * @return 삭제된 todo 의 id
     */
    public Long deleteTodo(Long todoId) throws Exception {
        Optional<Todo> optionalTodo = todoRepository.findById(todoId);

        if(optionalTodo.isEmpty()) {
            throw new Exception();
        }

        todoRepository.delete(optionalTodo.get());
        return todoId;
    }

}
