const standardStyles = {
  error: {
    textAlign: 'center',
    fontSize: 14,
    color: '#c60101',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 0,
    padding: 2
  },
  contain: {
    borderRadius: 8,
    border: 0,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 8,
    borderStyle: 'solid',
    borderWidth: 0.5,
    marginBottom: 5,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    '&:hover': {
      borderColor: '#2196f3'
    }
  },
  indent: {
    marginLeft: 30,
    paddingRight: 8,
    backgroundColor: 'white'
  },
  root: {
    marginLeft: 0,
    marginRight: 0
  },
  label: {
    fontSize: 15,
    fontWeight: 300,
    lineHeight: '20px',
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: 0
  },
  group: {
    marginTop: 0,
    marginBottom: 0
  }
}

export { standardStyles }
