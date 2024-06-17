## Overview

- What is MUI?
- Installation
- Demo Website (Component API)
- Examples

---
## What is MUI?

Material UI is a popular React-based UI library that offers a collection of pre-built, reusable components, following Google's Material Design guidelines. **Material Design is a visual language developed by Google that aims to provide a unified user experience across platforms and devices through consistent, responsive design and interactive components.**

As bootcamp students learning web development, incorporating Material UI into your projects can **significantly improve the aesthetics and functionality of your applications with minimal effort**. The library offers a wide range of components, such as buttons, dialogs, menus, and cards, that are fully customizable and can be easily integrated into your React applications.

Material UI promotes a modular and consistent design approach, allowing you to focus on the core functionality of your application, while ensuring a professional and modern look. The library is well-documented and has an active community, making it an excellent choice for beginners and experienced developers alike.

---

## Installation

Website: https://mui.com/
Script: `npm install @mui/material @emotion/react @emotion/styled`


## Website Demo

**Component API Reference**
> To learn about props, CSS, ect.

**Component Demo**
> To see examples of components in use, and to play with a sandbox version of the components.

## Examples

Basic Card `MyCard.js`

```jsx
import * as React from 'react';
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>        
         <Typography mt="10px" variant="body2">
          Body Text Goes Here, Body Text Goes Here! Body Text Goes Here, Body
          Text Goes Here! Body Text Goes Here, Body Text Goes Here!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link</Button>
      </CardActions>
    </Card>
  );
}
```

Adding an Image
```jsx
import {CardMedia} from "@mui/material"

<CardMedia
  component="img"
  height="194"
  image="https://mui.com/static/images/cards/paella.jpg"
  alt="Paella dish"
/>
```


Adding a Card Header

```jsx
<CardHeader
	title="Shrimp and Chorizo Paella"
	subheader="September 14, 2016"
/>
```

Grids `App.js`

```jsx
<Grid container spacing={2}>
  <MyCard></MyCard>
</Grid>
```

in `MyCard.js`, add `Grid` around the component
```jsx
<Grid item xs={4}>
</Grid>
```

Lets Map to see how this looks:

`App.js`
```jsx
 <Grid container spacing={2}>
  {myFoodHeaders.map((header) => {
	return <MyCard header={header}></MyCard>
  })}
</Grid>
```

`MyCard.js`
```jsx
// desctucture headerTitle
export default function BasicCard({headerTitle})
```

Add a Modal to the buttons:

in `MyCard.js`

```jsx
import { useState } from "react";

//Change Button
<Button onClick={handleOpen} size="small">Open Modal</Button>

// Add Modal
<Modal
	open={open}
	onClose={handleClose}
	aria-labelledby="modal-modal-title"
	aria-describedby="modal-modal-description"
>
	<Box>
	  <Typography id="modal-modal-title" variant="h6" component="h2">
		Text in a modal
	  </Typography>
	  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
		Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	  </Typography>
	</Box>
</Modal>
```

Adjust style for `<box>`
```jsx
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

<Box sx={style}>
```