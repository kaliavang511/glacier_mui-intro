import {
    Typography, // basic component for text
    Button,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    Card
} from "@mui/material"


export default function BasicCard({foodImage}) {
    console.log(foodImage)
    return (
        <Card>
            <CardMedia
                component="img"
                image={foodImage}
                height="194px"
            />
            <CardHeader
                title="Wonderful Food"
                subheader="Yummy!"            
            />
            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis semper mauris. Etiam lacinia id est bibendum laoreet. Quisque ullamcorper lobortis mauris a auctor. Morbi lacinia lorem vitae tincidunt congue. Maecenas vitae libero commodo, hendrerit sem non, ultricies odio. Quisque vestibulum sapien eu dolor pharetra elementum. Praesent viverra leo lorem, et congue elit scelerisque at. Aliquam ac blandit dolor. Donec mi libero, tincidunt ut viverra nec, tincidunt at velit. In faucibus nibh sed nibh rhoncus, vitae sagittis arcu molestie. Maecenas posuere sem non pretium laoreet. Nunc condimentum risus vel pretium ullamcorper. Proin ac sagittis dolor. Suspendisse sed risus et enim tincidunt lacinia.
                </Typography>
            </CardContent>
            <CardActions>
                 <Button>Call To Action</Button>
            </CardActions>
        </Card>
    )
}