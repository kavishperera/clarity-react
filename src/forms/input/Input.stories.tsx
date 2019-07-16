/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Input} from "./Input";
import {Icon} from "../../icon";

storiesOf("Input", module)
    .add("a simple input box", () => <Input name="somevalue" onChange={action("changed")} />)
    .add("a simple input box with value", () => <Input name="somevalue" value="Apple" onChange={action("changed")} />)
    .add("with a label", () => <Input name="somevalue" label="somevalue" onChange={action("changed")} />)
    .add("with placeholder text", () => (
        <Input name="somevalue" placeholder="stuff goes here" onChange={action("changed")} />
    ))
    .add("with helper text", () => (
        <Input name="somevalue" helperText="this should help you figure it out" onChange={action("changed")} />
    ))
    .add("when disabled", () => <Input name="somevalue" disabled={true} onChange={action("changed")} />)
    .add("input box with icon", () => (
        <Input name="somevalue" onChange={action("changed")} placeholder="Type to search ...">
            <Icon shape="search" style={{marginLeft: "-20px", width: "16px", height: "16px"}} />
        </Input>
    ));