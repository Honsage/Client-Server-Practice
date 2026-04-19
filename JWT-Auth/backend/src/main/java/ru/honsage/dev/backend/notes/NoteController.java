package ru.honsage.dev.backend.notes;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @PostMapping
    public Note create(
            @RequestBody String content,
            Authentication auth
    ) {
        return noteService.create(auth.getName(), content);
    }

    @GetMapping
    public List<Note> getAll(Authentication auth) {
        return noteService.getUserNotes(auth.getName());
    }

    @PutMapping("/{id}")
    public Note update(
            @PathVariable Long id,
            @RequestBody String content,
            Authentication auth
    ) {
        return noteService.update(id, content, auth.getName());
    }

    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id,
            Authentication auth
    ) {
        noteService.delete(id, auth.getName());
    }
}