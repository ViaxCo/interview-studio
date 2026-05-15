---
id: tpm-collections-hardship-repayment
track: TPM
category: Credit & Lending
level: Intermediate
question: How would you design a collections and hardship repayment experience?
sources:
  - label: CFPB: Debt collection rule FAQs
    url: https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/debt-collection/debt-collection-rule-faqs/
  - label: CFPB: Negotiating with a debt collector
    url: https://www.consumerfinance.gov/ask-cfpb/how-do-i-negotiate-a-settlement-with-a-debt-collector-en-1447/
---

## Learn it

Collections is the process of helping a lender recover unpaid debt. Hardship is the user situation where repayment is difficult because of income loss, illness, emergency, or other financial stress.

The beginner mistake is designing collections like a punishment system. A good fintech product needs to recover money, but it also needs clear communication, fair options, regulatory review, accurate balances, and humane paths for people who are trying to pay.

The mental model:

```txt
Delinquency:
Payment is late.

Collections:
The company tries to resolve the unpaid balance.

Hardship:
The customer may need a different plan.
```

The TPM should design options that are operationally real, not just comforting copy.

## Walkthrough

Imagine a borrower misses two payments and says they lost their job.

A poor experience sends escalating threats and confusing fees.

A better experience offers structured paths:

```txt
Confirm the amount owed.
Explain fees and due dates.
Offer payment plan options.
Let the user request hardship review.
Show what happens if they miss the plan.
Send confirmations in writing.
```

This helps the customer understand the situation and helps the company keep records.

## Make it practical

Here is a hardship repayment artifact:

```txt
Customer state:
30 days past due

Available options:
- Pay full amount
- Pay minimum amount
- Set up repayment plan
- Request hardship review
- Contact support

Hardship intake:
- Reason for hardship
- Temporary or long-term
- Affordable payment amount
- Preferred contact method
- Supporting documents if required

Plan requirements:
- Start date
- Payment amount
- Number of payments
- Fees or interest treatment
- Credit reporting impact if applicable
- Confirmation message
- Missed-plan consequences
```

The experience should be clear enough that the customer knows what they agreed to.

## Common mistakes

A common mistake is hiding the balance breakdown. Customers need to understand principal, fees, interest, and due dates.

Another mistake is offering plans that operations cannot service. A plan is not real unless billing, reminders, support, and reporting can handle it.

A third mistake is using aggressive copy that creates complaints and compliance risk.

## Check yourself

- Why should collections not feel like a punishment system?
- What information should hardship intake collect?
- What should a repayment plan confirmation include?
- Why do support and billing systems need to understand the plan?
- What metrics would show whether hardship options are working?

## Interview version

I would design collections and hardship around clear balance details, repayment options, hardship intake, plan terms, confirmations, reminders, support visibility, compliance-approved messaging, credit reporting considerations, and metrics for cure rate, complaints, broken plans, and customer harm.

A strong answer balances recovery, compliance, and humane user experience.
