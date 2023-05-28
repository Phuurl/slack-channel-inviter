import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { Channels } from "../channels.ts";

export const ChannelInviteWorkflow = DefineWorkflow({
  callback_id: "invite_workflow",
  title: "Channel invites",
  input_parameters: {
    properties: {
      user: {
        type: Schema.slack.types.user_id,
      },
    },
    required: ["user"],
  },
});

ChannelInviteWorkflow.addStep(Schema.slack.functions.InviteUserToChannel, {
  user_ids: [ChannelInviteWorkflow.inputs.user],
  channel_ids: Channels,
});
