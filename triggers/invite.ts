import { Trigger } from "deno-slack-sdk/types.ts";
import { ChannelInviteWorkflow } from "../workflows/invite.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";

const workflowTrigger: Trigger<typeof ChannelInviteWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Join channels",
  description: "This workflow will add you to a predefined set of channels",
  workflow: "#/workflows/invite_workflow",
  inputs: {
    user: {
      value: TriggerContextData.Shortcut.user_id,
    },
  },
};

export default workflowTrigger;
