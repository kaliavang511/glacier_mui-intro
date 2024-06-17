import './App.css'
import { useState } from "react"
import BasicCard from './BasicCard'
import { Grid, Modal, Button, Box, Typography } from '@mui/material'

function App() {

  let myArray = [
    "https://townsquare.media/site/67/files/2023/05/attachment-40Things-5-Abbey-Minke1.jpg",
    "https://townsquare.media/site/67/files/2023/05/attachment-40Things-5-Abbey-Minke1.jpg",
    "https://townsquare.media/site/67/files/2023/05/attachment-40Things-5-Abbey-Minke1.jpg",
    "https://townsquare.media/site/67/files/2023/05/attachment-40Things-5-Abbey-Minke1.jpg",
    "https://townsquare.media/site/67/files/2023/05/attachment-40Things-5-Abbey-Minke1.jpg"
  ]

  let [isOpen, setIsOpen] = useState(false)

  let handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const style = {
    position: 'absolute',
    bgcolor: 'background.paper',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
    boxShadow: 24,
    border: '2px solid $000'
  }

  return (
    <>
      <Button onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            My Cool box shows cool stuff
          </Typography>
        </Box>
      </Modal>


      <Grid container spacing={2}>
        {myArray.map((image) => {
          return (
            <Grid key={image} item xs={4}>
              <BasicCard foodImage={image} />
            </Grid>
          )

        })}
      </Grid>

    </>
  )
}

export default App
