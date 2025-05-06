import argparse
import requests


def fetch_user_activity(username, event_type_filter=None, limit=20):
    url = f"https://api.github.com/users/{username}/events"
    fetched = requests.get(url)

    if fetched.status_code != 200:
        print("failed to fetch from the username!!! ")
        return
    print("=" * 40)
    print(f"👤 GitHub Activity for: {username} {f":{event_type_filter}" if event_type_filter!=None else ""}")
    print("=" * 40)

    events = fetched.json()
    
    # Limit the number of events to display
    count = 0

    for event in events:
        if count >= limit:
            break
            
        event_type = event['type']

        if event_type_filter and event_type != event_type_filter:
            continue
        
        event_repo = event['repo']['name']
        event_time = event['created_at']

        if event_type == "PushEvent":
            commit_count = len(event['payload']['commits'])
            print(f"- Pushed {commit_count} commit{'s' if commit_count > 1 else ''} to {event_repo} at {event_time}")
        elif event_type == "WatchEvent":
            print(f"- Starred on {event_repo}")
        elif event_type == "CommitCommentEvent":
            action = event['payload']['action']
            print(f"- {action} a comment on a commit on {event_repo} at {event_time} ")
        elif event_type == "CreateEvent":
            ref_type = event['payload']['ref_type']
            ref = event['payload']['ref']
            print(f"- Created a {ref_type} {f": {ref} on {event_repo}" if ref != None else f' {event_repo}'} at {event_time}")
        elif event_type == "DeleteEvent":
            ref_type = event['payload']['ref_type']
            ref = event['payload']['ref']
            print(f"- Deleted a {ref_type} {f": {ref} on {event_repo}" if ref != None else f' {event_repo}'} at {event_time}")
        elif event_type == "ForkeEvent":
            forkee = event['payload']['forkee']
            print(f"- Forked  {forkee} repo  at {event_time}")
        elif event_type == "IssueCommentType":
            action = event['payload']['action']
            print(f"- {action.capitalize()} a comment on {event_repo} at {event_time}")
        elif event_type == "IssuesEvent" :
            action = event['payload']['action']
            print(f"- {action.capitalize()} a Issue on {event_repo} at {event_type} ")
        elif event_type == "PullRequestEvent" :
            action = event['payload']['action']
            pull_req = event['payload']['pull_request']['title']
            print(f"- {action.capitalize()} a Pull Request \"{pull_req}\" on {event_repo} at {event_time}")
        else:
            print(f"- {event_type} on {event_repo} at {event_time}")
            
        count += 1

    if count >= limit:
        print(f"- ... (showing {limit} of {len(events)} events)")
    else:
        print("- .....")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="fetch users Github activity")
    parser.add_argument("--username", type=str, required=True, help="Github username")
    parser.add_argument("--type", type=str, required=False, help="filter by event type like --type PushEvent")
    parser.add_argument("--limit", type=int, default=20, help="limit the number of events (default: 20)")
    args = parser.parse_args()
    
    fetch_user_activity(args.username, args.type, args.limit)
