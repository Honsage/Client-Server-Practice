package ru.honsage.dev.backend.notes;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.honsage.dev.backend.user.User;
import ru.honsage.dev.backend.user.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteService {
    private final NoteRepository noteRepository;
    private final UserRepository userRepository;

    public Note create(String username, String content) {
        User user = userRepository.findByUsername(username).orElseThrow();

        Note note = Note.builder()
                .content(content)
                .user(user)
                .build();

        return noteRepository.save(note);
    }

    public List<Note> getUserNotes(String username) {
        User user = userRepository.findByUsername(username).orElseThrow();
        return noteRepository.findByUserId(user.getId());
    }

    public Note update(Long id, String content) {
        Note note = noteRepository.findById(id).orElseThrow();
        note.setContent(content);
        return noteRepository.save(note);
    }

    public void delete(Long id) {
        noteRepository.deleteById(id);
    }
}