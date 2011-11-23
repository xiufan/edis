var index = [['app','edis','edis','[application]'],['mod','edis','edis','Redis (http://redis.io), but in Erlang.'],['mod','edis','edis_backend','DB backend behaviour for edis.'],['mod','edis','edis_client','edis client FSM.'],['mod','edis','edis_client_mgr','Edis client manager.'],['mod','edis','edis_client_sup','Edis client supervisor.'],['mod','edis','edis_command_runner','edis Command runner.'],['mod','edis','edis_config','edis Configuration utilities.'],['mod','edis','edis_db','edis Database.'],['mod','edis','edis_db_monitor','edis Database Monitor.'],['mod','edis','edis_db_sup','Edis DataBase supervisor.'],['mod','edis','edis_gb_trees','Extension for gb_trees with a couple of extra func'],['mod','edis','edis_listener','Listener process for clients.'],['mod','edis','edis_listener_sup','Edis TCP listener supervisor.'],['mod','edis','edis_lists','New lists implementation with O(1) for lists:lengt'],['mod','edis','edis_pubsub','edis PubSub Monitor.'],['mod','edis','edis_pubsub_sup','Edis Pub/Sub supervisor.'],['mod','edis','edis_sup','Edis main supervisor.'],['mod','edis','edis_util','edis utilities.'],['mod','edis','zsets','Sorted Sets.'],['fun','edis','edis:start/0','Starts the application.'],['fun','edis','edis:stop/0','Stops the application.'],['fun','edis','edis_backend:behaviour_info/1',[]],['fun','edis','edis_client:disconnect/1',[]],['fun','edis','edis_client_mgr:start_client/0',' Starts a new client process.'],['fun','edis','edis_client_mgr:start_link/1',' Starts the supervisor process.'],['fun','edis','edis_client_sup:count_clients/0',' Returns the count of reigstered clients under the'],['fun','edis','edis_client_sup:reload/0',' Reloads configuration.'],['fun','edis','edis_client_sup:start_client/0',' Starts a new client process.'],['fun','edis','edis_client_sup:start_link/0',' Starts the supervisor process.'],['fun','edis','edis_command_runner:err/1',[]],['fun','edis','edis_command_runner:last_arg/1','Should last argument be inlined?       Useful for'],['fun','edis','edis_command_runner:run/1',[]],['fun','edis','edis_command_runner:start_link/1',[]],['fun','edis','edis_command_runner:stop/1',[]],['fun','edis','edis_config:get/1',[]],['fun','edis','edis_config:set/1',[]],['fun','edis','edis_db:process/1',[]],['fun','edis','edis_db:run/1',[]],['fun','edis','edis_db:run/1','Equivalent to run(Db, Command, 5000).'],['fun','edis','edis_db:start_link/1',[]],['fun','edis','edis_db_monitor:add_sup_handler/0','Subscribes client.'],['fun','edis','edis_db_monitor:delete_handler/0','Unsubscribes client.'],['fun','edis','edis_db_monitor:notify/1','Notifies an event.'],['fun','edis','edis_db_monitor:start_link/0','Starts the event manager.'],['fun','edis','edis_db_sup:reload/0',' Reloads configuration.'],['fun','edis','edis_db_sup:start_link/0',' Starts the supervisor process.'],['fun','edis','edis_gb_trees:previous/1','Like next/1 for reverse iterators.'],['fun','edis','edis_gb_trees:rev_iterator/1','Returns a reverse iterator.'],['fun','edis','edis_listener:start_link/1',' Starts a new client listener.'],['fun','edis','edis_listener_sup:reload/0',' Reloads configuration.'],['fun','edis','edis_listener_sup:start_link/0',' Starts the supervisor process.'],['fun','edis','edis_lists:append/1','appends lists X and Y.'],['fun','edis','edis_lists:empty/0',[]],['fun','edis','edis_lists:filter/1',[]],['fun','edis','edis_lists:from_list/1',[]],['fun','edis','edis_lists:insert/4',[]],['fun','edis','edis_lists:length/1',[]],['fun','edis','edis_lists:nth/1','returns the Nth element of the list L.'],['fun','edis','edis_lists:nthtail/1','returns the Nth tail of the list L.'],['fun','edis','edis_lists:pop/1','pops the leftmost element of the list.'],['fun','edis','edis_lists:push/2','inserts X to the left of the list.'],['fun','edis','edis_lists:remove/2',[]],['fun','edis','edis_lists:replace_head/2','replaces head element.'],['fun','edis','edis_lists:reverse/1','reverse all elements in the list L.'],['fun','edis','edis_lists:split/1',[]],['fun','edis','edis_lists:splitwith/1',[]],['fun','edis','edis_lists:sublist/1','Returns the sub-list starting at Start of length L'],['fun','edis','edis_lists:to_list/1',[]],['fun','edis','edis_pubsub:add_sup_handler/0','Subscribes client.'],['fun','edis','edis_pubsub:count_handlers/0','Returns the number of currently active handlers.'],['fun','edis','edis_pubsub:delete_handler/0','Unsubscribes client.'],['fun','edis','edis_pubsub:notify/1','Notifies an event.'],['fun','edis','edis_pubsub:start_link/0','Starts the event manager.'],['fun','edis','edis_pubsub_sup:reload/0',' Reloads configuration.'],['fun','edis','edis_pubsub_sup:start_link/0',' Starts the supervisor process.'],['fun','edis','edis_sup:start_link/0',' Starts a new supervisor.'],['fun','edis','edis_util:binary_to_float/1',[]],['fun','edis','edis_util:binary_to_float/1',[]],['fun','edis','edis_util:binary_to_integer/1',[]],['fun','edis','edis_util:binary_to_integer/1',[]],['fun','edis','edis_util:glob_to_re/1',[]],['fun','edis','edis_util:integer_to_binary/1',[]],['fun','edis','edis_util:join/1',[]],['fun','edis','edis_util:lower/1',[]],['fun','edis','edis_util:make_pairs/1',[]],['fun','edis','edis_util:now/0','UTC in *NIX seconds.'],['fun','edis','edis_util:random_binary/0',[]],['fun','edis','edis_util:timestamp/0','Current timestamp.'],['fun','edis','edis_util:upper/1',[]],['fun','edis','zsets:count/1','Returns the number of elements between Min and Max'],['fun','edis','zsets:count/1','Equivalent to count(Min, Max, ZSet, forward).'],['fun','edis','zsets:delete_any/3','Removes the node with key Key from Tree1 if the ke'],['fun','edis','zsets:direction/2','Returns the direction of the iterator.'],['fun','edis','zsets:enter/4','Adds a new element to the zset.'],['fun','edis','zsets:enter/4','Equivalent to enter(Score, Member, ZSet).'],['fun','edis','zsets:find/3','This function searches for a key in a zset.'],['fun','edis','zsets:intersection/2','Returns the intersection of the non-empty list of '],['fun','edis','zsets:intersection/2','Returns the intersection of ZSet1 and ZSet2 genera'],['fun','edis','zsets:iterator/2','Returns an iterator that can be used for traversin'],['fun','edis','zsets:iterator/2','Equivalent to iterator(ZSet, forward).'],['fun','edis','zsets:list/1','Returns the list of elements with scores between t'],['fun','edis','zsets:list/1','Equivalent to list(Min, Max, ZSet, forward).'],['fun','edis','zsets:map/2','Executes Fun in each element and returns the zset '],['fun','edis','zsets:new/0','Creates an empty zset/2'],['fun','edis','zsets:next/2','Returns {Score, Member, Iter2} where Score is the '],['fun','edis','zsets:range/1','Returns the list of elements between the Start one'],['fun','edis','zsets:range/1','Equivalent to range(Start, Stop, ZSet, forward).'],['fun','edis','zsets:size/1','Returns the size of the zset.'],['fun','edis','zsets:to_list/2','Converts the sorted set into a list of {Score, Mem'],['fun','edis','zsets:union/2','Returns the union of the non-empty list of ZSets g'],['fun','edis','zsets:union/2','Returns the union of ZSet1 and ZSet2 generating th']];