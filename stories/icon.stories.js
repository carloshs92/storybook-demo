import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import {StoryComponent} from "./index.stories";
import Icon from "../src/design-system/Icon";
import {styled} from "../src/design-system/theme";

const IconSet = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    svg {
        height: 32px;
        width: 32px;
    }
`;

storiesOf('Icon', module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addParameters({ percy: { widths: [375, 1280], rtl: true } })
    .add('Set', () => {
        return (
            <StoryComponent>
                <IconSet>
                    <Icon name={"User-circle"} />
                    <Icon name={"Star-full"} />
                    <Icon name={"Uppercase"} />
                    <Icon name={"Light"} />
                    <Icon name={"Viewnot"} />
                    <Icon name={"Settings"} />
                    <Icon name={"Notification"} />
                    <Icon name={"Edit"} />
                    <Icon name={"Copy"} />
                    <Icon name={"View"} />
                    <Icon name={"Update"} />
                    <Icon name={"Whatsapp"} />
                    <Icon name={"User"} />
                    <Icon name={"Time"} />
                    <Icon name={"Time-2"} />
                    <Icon name={"Share"} />
                    <Icon name={"Ticket"} />
                    <Icon name={"Theme"} />
                    <Icon name={"Star"} />
                    <Icon name={"Trash"} />
                    <Icon name={"Text"} />
                    <Icon name={"Smile"} />
                    <Icon name={"Send"} />
                    <Icon name={"Order"} />
                    <Icon name={"Professional"} />
                    <Icon name={"Photo"} />
                    <Icon name={"Navigation-menu"} />
                    <Icon name={"Search"} />
                    <Icon name={"Phone"} />
                    <Icon name={"Pin"} />
                    <Icon name={"Message"} />
                    <Icon name={"Mark"} />
                    <Icon name={"Image"} />
                    <Icon name={"Heart-circle"} />
                    <Icon name={"Idea"} />
                    <Icon name={"Id"} />
                    <Icon name={"Lock"} />
                    <Icon name={"Gift"} />
                    <Icon name={"Mail"} />
                    <Icon name={"Guide"} />
                    <Icon name={"Home"} />
                    <Icon name={"Filters"} />
                    <Icon name={"Close"} />
                    <Icon name={"Double-check-circle"} />
                    <Icon name={"Chevron-right"} />
                    <Icon name={"Dialog"} />
                    <Icon name={"File"} />
                    <Icon name={"Chevron-up"} />
                    <Icon name={"Chevron-left"} />
                    <Icon name={"Chevron-down"} />
                    <Icon name={"Bookmark"} />
                    <Icon name={"Campaign"} />
                    <Icon name={"Check-circle"} />
                    <Icon name={"Check"} />
                    <Icon name={"Cell-phone"} />
                    <Icon name={"Career"} />
                    <Icon name={"Call"} />
                    <Icon name={"Calendar"} />
                    <Icon name={"Attachment"} />
                    <Icon name={"Arrow-up"} />
                    <Icon name={"Action-in"} />
                    <Icon name={"Arrow-down"} />
                    <Icon name={"Add"} />
                    <Icon name={"Arrow-right"} />
                    <Icon name={"Action-out"} />
                    <Icon name={"Alert"} />
                    <Icon name={"Arrow-left"} />
                    <Icon name={"Announcement"} />
                    <Icon name={"Add-circle"} />
                    <Icon name={"Achievements"} />
                </IconSet>
            </StoryComponent>
        )
    });
