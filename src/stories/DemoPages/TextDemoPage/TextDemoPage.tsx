import { Divider } from "../../../lib"
import { ScreenSize } from "../../../lib/model/sizeScreen"
import { Typography } from "../../../lib/ui/Text/Text/Typography"
import { BaseDemoPage } from "../BaseDemoPage"
import { TextDemoBlock } from "./TextDemoBlock"


export const TextDemoPage = () => {

    return(
        <BaseDemoPage>
            <div style={{padding: "10px"}}>
                <TextDemoBlock label="header">
                    <Typography type='heading' screensize={ScreenSize.MOBILE}>test header</Typography>
                    <Typography type='heading' screensize={ScreenSize.STANDART}>test header</Typography>
                    <Typography type='heading' screensize={ScreenSize.BIG_SCREEN}>test header</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="title">
                    <Typography type='title' screensize={ScreenSize.MOBILE}>test title</Typography>
                    <Typography type='title' screensize={ScreenSize.STANDART}>test title</Typography>
                    <Typography type='title' screensize={ScreenSize.BIG_SCREEN}>test title</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="title-2">
                    <Typography type='title-2' screensize={ScreenSize.MOBILE}>test title</Typography>
                    <Typography type='title-2' screensize={ScreenSize.STANDART}>test title</Typography>
                    <Typography type='title-2' screensize={ScreenSize.BIG_SCREEN}>test title</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="SmallText">
                    <Typography type='small' screensize={ScreenSize.MOBILE}>test SmallText</Typography>
                    <Typography type='small' screensize={ScreenSize.STANDART}>test SmallText</Typography>
                    <Typography type='small' screensize={ScreenSize.BIG_SCREEN}>test SmallText</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="BaseText">
                    <Typography type='body' screensize={ScreenSize.MOBILE}>test BaseText</Typography>
                    <Typography type='body' screensize={ScreenSize.STANDART}>test BaseText</Typography>
                    <Typography type='body' screensize={ScreenSize.BIG_SCREEN}>test BaseText</Typography>
                </TextDemoBlock>
            </div>
            <Typography type='heading' screensize={ScreenSize.STANDART}>weight</Typography>
            <div style={{padding: "10px"}}>
                <TextDemoBlock label="header">
                    <Typography weight='thin' type='heading'>test header</Typography>
                    <Typography weight='standart' type='heading'>test header</Typography>
                    <Typography weight='bold' type='heading'>test header</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="title">
                    <Typography type='title' weight='thin'>test title</Typography>
                    <Typography type='title' weight='standart'>test title</Typography>
                    <Typography type='title' weight='bold'>test title</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="title-2">
                    <Typography type='title-2' weight='thin'>test title</Typography>
                    <Typography type='title-2' weight='standart'>test title</Typography>
                    <Typography type='title-2' weight='bold'>test title</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="SmallText">
                    <Typography type='small' weight='thin'>test SmallText</Typography>
                    <Typography type='small' weight='standart'>test SmallText</Typography>
                    <Typography type='small' weight='bold'>test SmallText</Typography>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="BaseText">
                    <Typography type='body' weight='thin'>test BaseText</Typography>
                    <Typography type='body' weight='standart'>test BaseText</Typography>
                    <Typography type='body' weight='bold'>test BaseText</Typography>
                </TextDemoBlock>
            </div>
        </BaseDemoPage>
    )
}