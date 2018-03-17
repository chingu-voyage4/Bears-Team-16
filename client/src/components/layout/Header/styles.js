import glamorous from 'glamorous';

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
    marginRight : 10,
    textDecoration: 'none',
    color: 'black'
})
