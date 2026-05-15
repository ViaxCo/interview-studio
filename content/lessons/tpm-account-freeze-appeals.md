---
id: tpm-account-freeze-appeals
track: TPM
category: Fraud & Risk
level: Intermediate
question: How would you design an account freeze and appeal experience?
sources:
  - label: CFPB: Unauthorized transaction guidance
    url: https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
  - label: CFPB: Electronic Fund Transfers FAQs
    url: https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/electronic-fund-transfers/electronic-fund-transfers-faqs/
---

## Learn it

An account freeze is a restriction that prevents some or all account activity because the company sees risk.

The beginner mistake is thinking the product requirement is just "block the account." In real life, freezing an account can stop a fraudster, but it can also trap a legitimate user away from their own money. That means the product needs clear states, careful permissions, safe customer messaging, and a path to resolve the issue.

The mental model:

```txt
Restriction:
What the user cannot do right now.

Reason:
Why the restriction exists internally.

Resolution path:
What evidence or action can remove it.
```

The user does not need every internal fraud detail, but they do need enough information to know what is happening and how to move forward.

## Walkthrough

Imagine a customer tries to send money after suspicious login behavior. The system freezes outgoing transfers.

A bad experience says:

```txt
Your account is locked. Contact support.
```

A better experience says:

```txt
We paused transfers from your account while we review unusual activity.
You can still sign in and view your balance.
To help us review this faster, confirm your identity.
```

The second message is calmer. It says what is restricted, what still works, and what the user can do.

## Make it practical

Here is a freeze and appeal artifact:

```txt
Freeze type:
Outgoing transfer restriction

User can still:
- Sign in
- View balance
- Download statements
- Contact support

User cannot:
- Send money
- Add new recipients
- Change security settings

Internal reason:
Possible account takeover

Resolution paths:
- Step-up identity verification
- Analyst review
- Customer support callback
- Compliance escalation if required

Appeal requirements:
- Clear status page
- Evidence upload if needed
- SLA by risk tier
- Human review for account closure
- Audit log for every restriction change
```

The product should avoid turning risk controls into a dead end.

## Common mistakes

A common mistake is using one generic frozen state for every risk. A sanctions hold, account takeover hold, failed KYC hold, and compliance review are not the same product state.

Another mistake is giving support no visibility. If support cannot explain allowed next steps, the user gets bounced around.

A third mistake is forgetting that restrictions can create harm. A false positive can affect rent, payroll, medical bills, or family support.

## Check yourself

- What should the user know during a freeze?
- What internal details should not be exposed?
- Which account actions should remain available?
- When should an appeal require human review?
- What metrics would show freeze false positives are too high?

## Interview version

I would design account freezes as specific restriction states with clear user messaging, safe internal reason codes, support visibility, appeal paths, SLAs, and audit logs. The user should know what is restricted, what still works, and what they can do next, while sensitive fraud logic stays protected.

A strong TPM answer balances fraud prevention with legitimate-user access and resolution.
