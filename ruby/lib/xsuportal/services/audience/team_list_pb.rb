# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: xsuportal/services/audience/team_list.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("xsuportal/services/audience/team_list.proto", :syntax => :proto3) do
    add_message "xsuportal.proto.services.audience.ListTeamsResponse" do
      repeated :teams, :message, 1, "xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem"
    end
    add_message "xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem" do
      optional :team_id, :int64, 1
      optional :name, :string, 2
      repeated :member_names, :string, 3
      optional :is_student, :bool, 5
    end
  end
end

module Xsuportal
  module Proto
    module Services
      module Audience
        ListTeamsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("xsuportal.proto.services.audience.ListTeamsResponse").msgclass
        ListTeamsResponse::TeamListItem = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem").msgclass
      end
    end
  end
end
