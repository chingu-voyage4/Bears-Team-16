import glamorous from 'glamorous';

export const FooterStyle = glamorous.div({
    backgroundColor: '#C8E6C9',
    height: 400,
    color: 'black',
    position: "fixed",
    left: "0",
    bottom: "0",
    '@supports (display: grid)': {
        display: 'grid',
        gridGap: 20,
        gridTemplateAreas: `
     'footer-icon footer-text'
    `,
    },
});

export const FooterLink = glamorous.div({
    backgroundColor: '#6FCF97',
    height: 100,
    color: 'black',
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
});



