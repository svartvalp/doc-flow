package ru.mirea.docflow.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import ru.mirea.docflow.dao.UserDao;

import java.util.List;

@RequiredArgsConstructor
@Component
public class UserDetailsServiceImpl  implements UserDetailsService {

    private final UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userDao.findByLogin(username);
        return new User(user.getLogin(), user.getPassword(), List.of(new SimpleGrantedAuthority("ROLE_USER")));
    }
}
