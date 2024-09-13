import { Divider } from "../../../lib"
import { ScreenSize } from "../../../lib/model/sizeScreen"
import { BaseText } from "../../../lib/ui/Text/Text/BaseText"
import { H1, H2, H3, H4 } from "../../../lib/ui/Text/Text/Heading"
import { SmallText } from "../../../lib/ui/Text/Text/SmallText"
import { BaseDemoPage } from "../BaseDemoPage"
import { TextDemoBlock } from "./TextDemoBlock"


export const TextDemoPage = () => {

    return(
        <BaseDemoPage>
            <div style={{padding: "10px"}}>
                <TextDemoBlock label="h1">
                    <H1 screensize={ScreenSize.MOBILE}>test H1</H1>
                    <H1 screensize={ScreenSize.STANDART}>test H1</H1>
                    <H1 screensize={ScreenSize.BIG_SCREEN}>test H1</H1>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="h2">
                    <H2 screensize={ScreenSize.MOBILE}>test H2</H2>
                    <H2 screensize={ScreenSize.STANDART}>test H2</H2>
                    <H2 screensize={ScreenSize.BIG_SCREEN}>test H2</H2>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="h3">
                    <H3 screensize={ScreenSize.MOBILE}>test H3</H3>
                    <H3 screensize={ScreenSize.STANDART}>test H3</H3>
                    <H3 screensize={ScreenSize.BIG_SCREEN}>test H3</H3>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="h4">
                    <H4 screensize={ScreenSize.MOBILE}>test H4</H4>
                    <H4 screensize={ScreenSize.STANDART}>test H4</H4>
                    <H4 screensize={ScreenSize.BIG_SCREEN}>test H4</H4>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="SmallText">
                    <SmallText screensize={ScreenSize.MOBILE}>test SmallText</SmallText>
                    <SmallText screensize={ScreenSize.STANDART}>test SmallText</SmallText>
                    <SmallText screensize={ScreenSize.BIG_SCREEN}>test SmallText</SmallText>
                </TextDemoBlock>
                <Divider/>
                <TextDemoBlock label="BaseText">
                    <BaseText screensize={ScreenSize.MOBILE}>test BaseText</BaseText>
                    <BaseText screensize={ScreenSize.STANDART}>test BaseText</BaseText>
                    <BaseText screensize={ScreenSize.BIG_SCREEN}>test BaseText</BaseText>
                </TextDemoBlock>
            </div>
        </BaseDemoPage>
    )
}