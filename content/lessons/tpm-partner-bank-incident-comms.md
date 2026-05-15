---
id: tpm-partner-bank-incident-comms
track: TPM
category: Observability & Operations
level: Advanced
question: How would you handle customer communications during a partner bank incident?
sources:
  - label: Atlassian incident communication
    url: https://www.atlassian.com/incident-management/incident-communication
  - label: CFPB: Consumer Complaint Program
    url: https://www.consumerfinance.gov/compliance/consumer-complaint-program/
---

## Learn it

A partner bank incident can delay transfers, card authorizations, account updates, statements, or settlement even if your own app is healthy.

The beginner mistake is waiting until every detail is known before saying anything. In fintech, silence can create panic because users care about access to money. Communication should be accurate, calm, and updated as facts improve.

The mental model:

```txt
Known:
What we can confidently say.

Unknown:
What we are still investigating.

Next update:
When users will hear from us again.
```

The TPM should coordinate product states, status page, support scripts, and customer messages.

## Walkthrough

Imagine a partner bank has delayed ACH processing. Users see transfers stuck.

A weak message says:

```txt
Something went wrong.
```

A stronger message says:

```txt
Bank transfer processing is delayed due to a partner issue.
Your transfer is still queued. You do not need to submit it again.
Next update: 3:00 p.m.
```

That message reduces duplicate attempts and support confusion.

## Make it practical

Here is an incident communication artifact:

```txt
Incident:
Partner bank ACH delay

Customer segments:
- Users with pending transfers
- Users trying to initiate new transfers
- Support agents
- Internal leadership

Channels:
- In-app banner
- Transfer detail status
- Status page
- Email for affected users
- Support macro

Message requirements:
- What is affected
- What is not affected
- Whether user action is needed
- Expected next update
- Safe wording approved by legal/compliance

Metrics:
- Affected users
- Duplicate attempts
- Support contact rate
- Complaint rate
- Time to first update
```

The best incident communication prevents extra harm.

## Common mistakes

A common mistake is overpromising a fix time. If the partner cannot guarantee it, do not make it sound guaranteed.

Another mistake is communicating only globally. Affected users need contextual status in the workflow they are using.

A third mistake is forgetting support. If support does not get the same facts, customers hear conflicting answers.

## Check yourself

- Why is silence risky during money movement incidents?
- What should an incident message include?
- What channels should be coordinated?
- Why should support scripts match in-app copy?
- What metrics show communication is working?

## Interview version

I would handle partner bank incident communications by identifying affected users and flows, writing accurate approved messages, showing contextual in-app status, updating support scripts and status page, giving next-update timing, avoiding overpromises, and tracking support contacts, complaints, duplicate attempts, and time to first update.

A strong answer treats incident communication as part of customer harm reduction.
