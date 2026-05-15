---
id: tpm-kyb-beneficial-ownership-onboarding
track: TPM
category: Security & Compliance
level: Advanced
question: How would you design KYB onboarding for beneficial ownership?
sources:
  - label: FFIEC: Customer Due Diligence
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/02
  - label: FFIEC: Customer Identification Program
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/01
---

## Learn it

KYB means "Know Your Business." It is the process of understanding a business customer before allowing them to use financial products.

The beginner mistake is asking only for company name and tax ID. For many financial products, the company also needs to understand who owns or controls the business, what the business does, and whether the relationship creates risk.

The mental model:

```txt
Business identity:
What is this company?

Beneficial ownership:
Who ultimately owns or controls it?

Risk review:
Can we safely provide the product?
```

The TPM should make a complex compliance requirement feel like a guided workflow instead of a wall of confusing forms.

## Walkthrough

Imagine a small business wants to open a fintech business account.

The product may need:

```txt
Company legal name
Tax identifier
Business address
Industry
Owners or controlling persons
Identity information for owners
Documents if verification fails
```

If the user does not understand why owner information is needed, they may abandon onboarding. Good product copy explains that financial services providers often need to verify the people behind a business.

## Make it practical

Here is a KYB artifact:

```txt
Business onboarding steps:
1. Business profile
2. Business address and tax ID
3. Industry and expected activity
4. Beneficial owners or control person
5. Identity verification for required people
6. Document upload if automated checks fail
7. Risk review
8. Approval, restriction, or rejection

Owner fields:
- Legal name
- Date of birth
- Address
- Ownership percentage or control role
- ID information if required

States:
- Draft
- Submitted
- Needs more information
- Manual review
- Approved
- Restricted
- Rejected
```

Support should see what is missing, not sensitive risk details that could compromise controls.

## Common mistakes

A common mistake is asking for owner information without explaining why. That feels invasive and hurts completion.

Another mistake is treating all businesses the same. Industry, geography, product usage, ownership structure, and transaction volume can change risk.

A third mistake is not designing resubmission. KYB often fails because data is mismatched or documents are unclear, and users need a recovery path.

## Check yourself

- What is the difference between business identity and beneficial ownership?
- Why does KYB need good user education?
- What onboarding states should exist?
- What should support see when KYB is stuck?
- Why should risk rules vary by business type?

## Interview version

I would design KYB as a staged workflow for business identity, beneficial ownership, control persons, expected activity, verification, document recovery, risk review, decision states, support visibility, and audit logs. I would partner with compliance to define required fields and risk tiers.

A strong answer shows that KYB is both a compliance process and a user onboarding experience.
