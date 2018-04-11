import glamorous from 'glamorous';

export const FooterStyle = glamorous.div({
    backgroundColor: '#C8E6C9',
    height: 400,
    color: 'black',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    '@supports (display: grid)': {
        display: 'grid',
        gridGap: 20,
        gridTemplateAreas: `
     'footer-icon footer-text'
    `,
    },
});

export const FooterIconStyle = glamorous.div({
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between'
});


export const FooterText = glamorous.div({
    maxWidth : '628px',
    marginTop: '10px',
    fontSize : '25px'
})

export const FooterSubText = glamorous.div({
    marginTop: '-190px',
    textAlign: 'center',
    fontSize : '25px'
})


export const FooterLink = glamorous.div({
    backgroundColor: '#C8E6C9',
    height: 100,
    color: 'black',
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
});



