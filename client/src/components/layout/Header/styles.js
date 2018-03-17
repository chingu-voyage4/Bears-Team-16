import glamorous from 'glamorous';
import Browse from './img/Browse.png'

export const HeaderStyle = glamorous.div({
    backgroundColor: '#C8E6C9',
    height: 100,
    color: 'black',
    '@supports (display: grid)': {
        display: 'grid',
        gridGap: 20,
        gridTemplateAreas: `
     'header-logo header-navbar'
    `,
    },
});

export const NavBarStyle = glamorous.div({
    justifySelf: 'end',
    display: 'flex',
    justifyContent: 'space-between'
});

export const NavStyle = glamorous.div({
    margin: '20px 10px',
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between'
})

export const NavItem = glamorous.p({
    margin: '0',
    color: 'black'
})

export const Input = glamorous.input({
    height: 60,
    width: 329,
    backgroundColor: '#A0DBA2',
    border: 'none',
    margin: '20px 20px'
})

export const SignUpButton = glamorous.button({
    height: 55,
    width: 115,
    backgroundColor: '#E5E5E5',
    fontFamily: 'Nunito',
    color: 'white',
    fontWeight: 900,
    border: 'none',
    borderRadius: 4,
    padding: '10px 20px',
    margin: '20px 20px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    ':hover': {
        backgroundColor: '#E6E6E6',
        transform: 'translateY(-1px)',
        boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)'
    },
    ':focus': { outline: 0},
    ':active' : {
        transform: 'translateY(1px)'
    }
})
