# Scientifically Grounded Onboarding and Product Recommendation

## Executive recommendation

Snäx should not attempt to infer or diagnose a user's health goal from biometric data. A health goal is a preference and should be selected directly by the user. The scientifically defensible onboarding is a short decision aid for healthy adults: collect safety-critical exclusions, ask for one primary goal and the current eating or exercise occasion, then rank only products whose verified label data meet transparent rules.

No published questionnaire or algorithm can identify a universally “best” snack for an individual. Validated instruments measure narrower constructs such as dietary pattern, exercise motivation, physical activity, or readiness for exercise. They can inform the design, but none validates a vending-product recommendation. The recommendation engine itself therefore needs product-level validation and careful claims language.

The recommended first version is deliberately rule-based:

1. Exclude products with allergens, dietary conflicts, incomplete nutrition data, or an unsuitable use case.
2. Require a minimum evidence-based threshold for any functional result, such as a recovery snack.
3. Rank qualifying products by an established nutrient-profile score within comparable product groups.
4. Use the user's stated taste, price, and occasion preferences only as tie-breakers.
5. Return “no suitable match” when the assortment does not support the selected goal.

This approach is more supportable than machine learning at launch. Snäx currently has four published products, no outcome labels, and no numeric nutrition or allergen fields. A model trained on clicks or purchases would learn sales preference, position, price, and availability—not health benefit.

## Scope and scientific standard

### Intended population

The initial experience should be explicitly limited to generally healthy adults. The current Swiss dietary recommendations cover healthy adults aged 18–65 and exclude groups with different needs, including children, pregnant people, athletes with specialized needs, and people whose disease requires a specific nutrient intake.^1 Snäx may still show its ordinary catalogue to other users, but should not present its result as personalized health guidance for them.

The product should be positioned as a snack-selection aid, not as:

- a diagnosis or health-risk assessment;
- a weight-loss program;
- a complete dietary assessment;
- a sports-nutrition prescription;
- a substitute for a physician or registered dietitian; or
- evidence that one food will cause a health or performance outcome.

### What “scientifically grounded” should mean

A defensible system separates four different evidence questions:

| Layer | Question | Evidence standard |
|---|---|---|
| User input | Does the question measure what it says it measures? | Validated instrument where measurement is actually needed; direct self-report for preferences and goals |
| Safety | Can this product be shown to this user? | Complete manufacturer label, explicit allergen and dietary rules, conservative exclusion |
| Product quality | Is this the nutritionally stronger option among comparable foods? | Published nutrient-profile model using verified per-100 g/ml data |
| Goal fit | Is the product suitable for this occasion and stated goal? | Guideline threshold where one exists; otherwise a clearly labelled heuristic |

Scientific grounding does not mean that every output is “clinically proven.” It means the system does not claim more than its inputs and validation support, and every rule is traceable to a source, version, and product-label value.

## Candidate questionnaires and algorithms

### Questionnaires

| Instrument | Measures | Evidence and burden | Fit for Snäx |
|---|---|---|---|
| Goal Content for Exercise Questionnaire (GCEQ) | Five exercise-goal domains: health management, skill development, affiliation, image, and social recognition | A validated 20-item research scale with supported factor structure, stability, and internal consistency.^2 | Useful evidence that exercise motives are multidimensional. Too long, exercise-specific, and not a snack recommender. Do not copy it into onboarding. |
| Starting the Conversation (STC) | Broad dietary behaviours | Eight-item food-frequency screener developed for primary care and health promotion; validation was performed in 463 people with type 2 diabetes.^3 | The closest short dietary screener, but its population, foods, and counselling purpose do not validate Swiss snack ranking. Optional for later coaching, not needed for v1. |
| MEDAS | Adherence to a Mediterranean dietary pattern | Fourteen items; external studies show moderate agreement and some cultural variation.^4 | Measures a whole dietary pattern, not the suitability of one vending snack. Poor fit for a short Swiss product flow. |
| Exercise Vital Sign | Weekly moderate-to-vigorous activity minutes | Two questions. Against accelerometry, correlation was modest (r=0.38) and agreement for the 150-minute threshold was fair.^5 | If activity volume is genuinely needed later, this is more proportionate than a long survey. It should not determine a snack by itself. |
| IPAQ Short Form | Walking, moderate/vigorous activity, and sitting | Widely used, but a systematic review found weak correlation with objective measures and typical overestimation.^6 | Too much apparent precision. Do not calculate calories or product needs from IPAQ self-report. |
| Get Active Questionnaire / PAR-Q family | Whether further advice may be appropriate before increasing exercise | Established pre-participation safety tools; CSEP's current questionnaire is copyrighted and has permission terms.^7 | Relevant only if Snäx starts prescribing exercise. It does not screen whether a snack is safe or suitable. Do not reproduce or adapt without permission. |
| ASA24 | Detailed 24-hour diet recalls and food records | NCI research/clinical system that automatically codes complete intake; versions are country-specific.^8 | Scientifically stronger dietary measurement, but far too burdensome, not Swiss-localized, and unnecessary for a vending choice. |

### Nutrient-profile algorithms

| Model | Strength | Limitation | Recommendation |
|---|---|---|---|
| Nutri-Score 2023 | Publicly documented, updated by a multinational scientific committee, tested on branded-food databases, and used in Switzerland as a voluntary front-of-pack aid.^9,10 | It is not a personal diet prescription. Swiss guidance says to compare similar foods, and the logo is protected. It also requires data not present in the current Snäx model. | Best baseline for internal ranking among comparable products. Store the raw score and algorithm version. Do not display the letter/logo without confirming registration and usage rules. |
| WHO Europe Nutrient Profile Model 2023 | Category-specific thresholds for components of concern, tested by 13 member states.^11 | Designed to decide which products may be marketed to children, not to rank adult snacks. | Useful as a conservative audit or future child-protection gate, not the main adult ranker. |
| Food Compass 2.0 | Broad 100-point model incorporating nutrients, ingredients, processing, and additives.^12 | High data burden, more modelling assumptions, and little benefit for a four-product assortment. | Skip for v1. Reconsider only if a much larger and richer catalogue makes Nutri-Score insufficient. |
| Custom weighted “health score” | Easy to tailor to business goals | Weights are not validated merely because the nutrients are evidence-based; small weight changes can reverse rankings. | Do not present one as scientific. Prefer eligibility thresholds plus lexicographic tie-breaks. |
| Collaborative filtering or ML | Can learn purchase patterns at scale | Requires large, representative outcome data; optimizes the recorded label, usually purchase/click, rather than health. Can reproduce exposure and availability bias. | Do not use for health ranking. It may later personalize taste after the safety and nutrition gates. |

Nutri-Score is a complement to dietary guidance, not a recommendation for unrestricted consumption. The Swiss authority explicitly says it should be used to compare similar foods and does not replace the Swiss dietary recommendations.^10

## Recommended onboarding form

The form should ask only questions that change the result. It should not ask for weight, height, sex, diagnoses, medication, wearables, or genetic data in v1. The Food4Me randomized trial found that internet-delivered advice personalized from diet and lifestyle improved several dietary outcomes versus generic advice, while adding phenotype and genotype did not improve effectiveness.^13 A systematic review of randomized trials likewise found that personalized nutrition can improve intake, but called for better studies and did not establish a need for invasive inputs.^14

### Step 1 — safety and scope

Required questions:

1. **Age scope:** “Are you between 18 and 65?”
2. **Allergies or ingredients to avoid:** multi-select the 14 declarable allergen groups relevant to the Swiss label, plus “other ingredient.” Never infer absence from an ingredient summary.
3. **Dietary pattern:** omnivore, vegetarian, vegan, and user-entered exclusions. Add religious or ethical filters only when each product has a verifiable corresponding attribute.
4. **Special-diet boundary:** “Has a healthcare professional told you to follow a special diet or limit a nutrient?” If yes, ask only for explicit ingredients/nutrients to exclude or show the ordinary catalogue. Do not translate a diagnosis into a diet rule.

Result behaviour:

- A declared allergen always excludes a product; ranking must never override the exclusion.
- “May contain” cross-contact statements must be represented separately from intentional ingredients and handled conservatively.
- Unknown allergen status makes a product ineligible for personalized results.
- Users outside scope can browse but should see that the personalized health result is unavailable.

Swiss food information rules require clear identification of allergens, and the official list includes gluten-containing cereals, crustaceans, eggs, fish, peanuts, soy, milk, and named nuts, among others.^15

### Step 2 — primary goal

Ask directly: **“What do you want this snack to help with right now?”**

- Everyday balanced choice
- Stay satisfied between meals
- Strength-training recovery
- Endurance training or a long active session
- Hydration

Allow exactly one primary goal in v1. A secondary goal creates ambiguous trade-offs and arbitrary weights. “Lose weight,” “detox,” “boost immunity,” and disease-specific goals should not be product categories. The interface may reframe weight intent as “stay satisfied with a planned portion,” while making no promise of weight loss.

The user—not an algorithm—owns this answer. The GCEQ supports the broader point that exercise goals have distinct dimensions, but it does not justify silently inferring them.^2

### Step 3 — occasion

Ask one conditional question:

- Now, with no exercise-related timing
- Within roughly 90 minutes before exercise
- During exercise
- After exercise

If “during exercise” is selected, ask whether the session is expected to last **up to one hour** or **longer than one hour**. Swiss sport guidance recommends water for activity up to an hour and provides additional fluid guidance per hour of exercise; sport drinks become context-dependent rather than a default healthy beverage.^16

### Step 4 — preferences

Only collect preferences that exist as verified product attributes:

- sweet / savoury / no preference;
- still / sparkling for drinks;
- caffeine allowed / avoided;
- maximum price, if live price data is reliable.

These are tie-breakers, not health variables. A preference should never reintroduce a product excluded for safety.

### Optional later module

If Snäx later expands from one-off selection to behaviour coaching, add a separately validated diet screener rather than stretching this form. STC is the most plausible brief candidate, but it needs Swiss cultural adaptation, German/French/Italian validation, permission review, and a reason for each item to affect feedback. A full 24-hour recall belongs in research or dietetic care, not onboarding.

## Recommendation algorithm

### Principle: constraints before ranking

For user profile `u` and product `p`, the engine should proceed in fixed stages:

```text
eligible(p, u) =
  product data is verified and current
  AND no declared allergen conflicts
  AND dietary pattern is compatible
  AND occasion is compatible
  AND any goal-specific minimum is met

result = eligible products
  |> group by comparable product type
  |> order by nutrient-profile quality
  |> tie-break by goal metric
  |> tie-break by stated preference and price
```

This is a decision rule, not a clinical prediction model. Every result should expose a short explanation such as “matches your milk-free filter; lower-sugar drink within this drink group.” Do not say “best for your health” or imply an outcome the system did not measure.

### Baseline quality

Calculate the official 2023 Nutri-Score algorithm from verified per-100 g/ml product data, using the correct rules for general foods, fats/oils/nuts/seeds, and beverages.^9 Store:

- `nutrientProfileModel: 'nutri-score-2023'`;
- raw component points;
- final raw score and class;
- calculation timestamp;
- label source URL and label checked date.

Use the score internally within comparable groups. A water bottle and a solid snack should not compete on a single cross-category scale. The displayed recommendation can say “stronger nutritional profile among the available crackers,” but should not reproduce the protected Nutri-Score mark unless the business has satisfied Swiss registration and usage conditions.^10

### Goal-specific qualification and tie-breaks

#### Everyday balanced choice

Qualification: passes safety and data-completeness rules.

Order:

1. stronger nutrient profile within its product group;
2. alignment with the Swiss food pyramid (for example water/unsweetened drinks, a 15–30 g serving of unsalted nuts, or wholegrain products); and
3. user preference.

Swiss recommendations prioritize 1–2 litres of unsweetened drinks daily, at least half of cereal servings as wholegrain, and a small daily handful of unsalted nuts or seeds; sweet drinks, sweets, and salty snacks are optional and limited.^1 These are dietary-pattern recommendations, so the product explanation must not imply that a single item makes a diet balanced.

#### Stay satisfied between meals

Qualification: sold as a defined single portion with complete energy, protein, and fibre data.

Order:

1. stronger baseline nutrient profile;
2. smaller verified portion energy;
3. protein per serving; then
4. fibre per serving.

The ordering is a conservative heuristic, not a validated satiety equation. Higher-protein intake has shown acute effects on appetite in randomized trials, but long-term findings are inconclusive.^17 Fibre effects vary substantially by fibre type, and most acute interventions in one systematic review did not reduce appetite or food intake.^18 Portion size has stronger evidence: controlled studies show that larger portions increase energy intake in adults.^19 Accordingly, Snäx should not calculate a “satiety score” or promise weight loss.

#### Strength-training recovery

Qualification: the complete package supplies **at least 20 g of high-quality protein**, and the protein source is known. This is the low end of the commonly recommended 20–40 g per feeding for exercising adults.^20 Overall daily intake matters more than a single snack, and ordinary healthy adults have a lower population reference intake of 0.83 g/kg/day.^21

Order:

1. protein per serving, capped for ranking at 40 g;
2. baseline nutrient profile; then
3. user preference.

If no product reaches the threshold, return “No current product qualifies as a recovery snack” and optionally show an ordinary snack without a recovery claim. A product named or marketed as “protein” is not sufficient evidence.

#### Endurance or long active session

For sessions up to one hour, default the hydration result to water and do not add sugar merely because the user selected sport. For extended, high-intensity exercise, carbohydrate intake can become useful; sports-nutrition guidance commonly places intake around 30–60 g carbohydrate per hour for sessions beyond roughly an hour, but needs vary by intensity, duration, tolerance, and the rest of the diet.^22

Qualification for an “endurance fuel” result:

- exercise duration is longer than one hour;
- carbohydrate per package is verified;
- the product can practically be consumed in that context; and
- it does not violate safety filters.

Order by useful carbohydrate per portion toward the occasion target, then gastrointestinal practicality, then baseline nutrient profile. Do not recommend the highest-sugar product to someone who merely identifies as an endurance athlete.

#### Hydration

For daily hydration or activity up to one hour, rank water first. For longer exercise, a sports drink may qualify only when its carbohydrate, sodium, volume, and use case are verified. Rank beverage products separately from foods.

Do not calculate an exact fluid prescription from age, sex, or body weight. Individual sweat rate, environment, acclimatization, intensity, and opportunity to drink matter. That belongs in a later specialist flow, if at all.

### Abstention and confidence

The engine needs three result states:

- **Qualified match:** all required data and goal thresholds pass.
- **General alternative:** safe product, but it does not meet the functional threshold; copy must explain the limitation.
- **No result:** no safe or adequately documented product.

Confidence should describe data completeness, not certainty of health benefit:

| Confidence | Meaning |
|---|---|
| High | Current manufacturer label, complete nutrition/allergen data, direct goal threshold met |
| Medium | Complete label and safe, but ranking uses a non-validated tie-break heuristic |
| None | Missing/conflicting label data or no qualifying product; do not recommend |

## Product data required before implementation

The current `Product` interface contains a prose `ingredientsSummary` and sourced `nutritionClaims`, but no numeric nutrition, serving, allergen, dietary, or caffeine fields. The existing four categories—protein, drink, low-carb, and snack—are marketing categories and are insufficient for scientific ranking.

At minimum, each sellable package needs:

| Field group | Required fields |
|---|---|
| Identity | SKU/EAN, exact package size, product group, formulation/version |
| Per 100 g/ml | energy kJ/kcal, fat, saturated fat, carbohydrate, sugars, protein, salt, fibre when available |
| Per package | serving size and calculated nutrient totals; never assume one package equals a reference serving without recording it |
| Ingredients | full label text, ingredient source URL/image, checked date |
| Safety | intentional allergens, “may contain” allergens, dietary compatibility, caffeine and amount where applicable, sweeteners |
| Provenance | manufacturer/retailer source, effective date, reviewer, verification status |
| Scoring | nutrient-profile model/version, component points, raw score, last calculated date |

Nutrition values must come from the exact package being sold. A web listing, a different pack size, or an image is not enough when formulations conflict. Any nutrition calculation should fail closed when a required value is absent.

## Safety, claims, and privacy

### Food and health claims

Swiss rules allow only specified nutrition and health claims under their conditions of use. Claims that imply a food can treat or cure disease are prohibited; a health effect must be attributed to the authorized nutrient or substance, not casually to the whole product. Claims about a rate or amount of weight loss are also prohibited.^23

Practical copy rules:

- Prefer factual explanations: “contains 22 g protein per package,” not “builds muscle.”
- Use “matches the filters you selected,” not “medically suitable.”
- Never say “suitable for diabetics”; the Swiss authority specifically identifies that wording as misleading.^23
- Have Swiss food-law counsel review the final UI, algorithm name, and every result explanation before launch.

### Medical-device boundary

Swissmedic states that software is medical-device software when it processes data for an individual medical purpose, with intended purpose and promotional claims being decisive.^24 Keeping Snäx to general wellness and ordinary food selection reduces this risk, but a disclaimer cannot rescue medical functionality. Diagnosis-specific recommendations, treatment claims, lab interpretation, or medical risk prediction require a fresh regulatory assessment.

### Privacy

Health data is sensitive personal data under Swiss law. The FDPIC emphasizes privacy by design, purpose transparency, data minimization, encryption, and explicit consent for secondary marketing or product-development uses of health data.^25

The lowest-risk v1 can calculate entirely in the browser and discard answers when the result page closes. If answers are stored:

- obtain clear, granular consent;
- state purpose, retention, controller, recipients, and deletion controls;
- do not reuse health-goal answers for marketing or model training by default;
- separate analytics events from answer values;
- encrypt transport and storage; and
- perform a privacy/legal review before release.

## Validation plan

The evidence validates source instruments and nutrition principles, not Snäx's combined form and ranking. The complete system therefore needs its own staged validation.

### 1. Desk verification

- Two independent reviewers transcribe every label; disagreements are resolved against the physical package or manufacturer record.
- Unit tests cover each nutrient-profile boundary and special product category.
- Property tests or exhaustive fixtures prove that an allergen conflict can never rank or render.
- Snapshot fixtures preserve the algorithm version and score explanation for each product.

Acceptance condition: 100% agreement between the app's stored values and the approved source record, and 100% exclusion in all safety-conflict fixtures.

### 2. Expert content review

Have at least one Swiss registered dietitian with sports-nutrition competence review:

- the five goals and occasion branches;
- product-group definitions;
- every qualification threshold and explanation; and
- every case that returns a general alternative instead of a qualified match.

Separately obtain Swiss food-claims and data-protection review. This is not a substitute for user testing.

### 3. Cognitive and usability testing

Test with German-speaking users first, then separately with each supported language. Ask participants to think aloud and verify that they can distinguish:

- goal from occasion;
- allergy from preference;
- qualified match from general alternative; and
- product comparison from medical advice.

Do not set a universal sample size by convention. Start with small iterative rounds, fix clear comprehension failures, and continue until no material new issue appears; preregister a powered study if making a formal validation claim.

### 4. Criterion comparison

Create standardized user-and-occasion vignettes and ask independent dietitians to mark products as excluded, qualified, general alternative, or no result. Compare the system against the adjudicated panel:

- safety exclusions: sensitivity must be 100%;
- qualification agreement: report confusion matrix and Cohen/Fleiss kappa as appropriate;
- ranking: report top-1 agreement and normalized discounted cumulative gain; and
- explanation accuracy: audit every factual nutrient statement against its source.

Disagreement is evidence for revising a rule, not for training a black-box model on a tiny panel.

### 5. Prospective product experiment

After safety and content validation, run a preregistered comparison against the ordinary catalogue. Primary outcomes should be comprehension and selection quality, not clicks alone. Useful outcomes include whether users understand why an item was shown, whether the purchased item matches their declared restrictions, satisfaction after consumption, and repeat use. Monitor “no result” frequency and product availability by goal.

Purchases may optimize taste and merchandising later, but should never weaken the fixed safety and nutrient gates.

## Minimum implementation sequence

1. Complete and verify the numeric nutrition, package, allergen, dietary, and caffeine data for every published product.
2. Implement pure functions for hard exclusions and the official nutrient-profile calculation, each with a small executable test table.
3. Implement the five-goal form with conditional occasion questions and in-browser state only.
4. Add goal qualification, lexicographic ranking, abstention, and evidence-based explanations.
5. Obtain dietitian, claims, and privacy review before calling the result health-personalized.
6. Pilot, measure comprehension and safety agreement, then decide whether more questions improve outcomes enough to justify their burden.

The current assortment is likely to produce honest gaps. For example, a product carrying a “protein” label may still fail the 20 g recovery threshold, and a sugary drink should not become the hydration default. Those gaps should change assortment decisions rather than pressure the algorithm to manufacture a recommendation.

## Decision

Use a short original form, not a copied clinical questionnaire. Ask the goal directly. Base general product quality on Nutri-Score 2023 internally, within comparable product groups. Add only narrow, cited goal thresholds. Keep allergens and dietary exclusions as hard gates. Make “no suitable product” a first-class result.

This is the smallest scientifically defensible system for the present product catalogue. A more elaborate intake survey, calorie model, wearable integration, genetic personalization, or machine-learning ranker adds burden and risk without evidence that it improves this decision.

## Sources

1. Swiss Federal Food Safety and Veterinary Office (FSVO). “[Swiss dietary recommendations for adults](https://www.blv.admin.ch/de/ernaehrung-erwachsene).” 2024 recommendations; page current in 2026.
2. Sebire SJ, Standage M, Vansteenkiste M. “[Development and validation of the Goal Content for Exercise Questionnaire](https://pubmed.ncbi.nlm.nih.gov/18723897/).” *Journal of Sport & Exercise Psychology*. 2008;30(4):353–377. doi:10.1123/jsep.30.4.353.
3. Paxton AE, Strycker LA, Toobert DJ, Ammerman AS, Glasgow RE. “[Starting the Conversation: performance of a brief dietary assessment and intervention tool for health professionals](https://pubmed.ncbi.nlm.nih.gov/21146770/).” *American Journal of Preventive Medicine*. 2011;40(1):67–71. doi:10.1016/j.amepre.2010.10.009.
4. Papadaki A, et al. “[Validation of the English Version of the 14-Item Mediterranean Diet Adherence Screener](https://pubmed.ncbi.nlm.nih.gov/29382082/).” *Nutrients*. 2018;10(2):138. doi:10.3390/nu10020138.
5. Coleman KJ, et al. “[Validity of the Exercise Vital Sign Tool to Assess Physical Activity](https://pubmed.ncbi.nlm.nih.gov/33781618/).” *American Journal of Preventive Medicine*. 2021.
6. Lee PH, Macfarlane DJ, Lam TH, Stewart SM. “[Validity of the International Physical Activity Questionnaire Short Form: a systematic review](https://pubmed.ncbi.nlm.nih.gov/22018588/).” *International Journal of Behavioral Nutrition and Physical Activity*. 2011;8:115. doi:10.1186/1479-5868-8-115.
7. Canadian Society for Exercise Physiology. “[Get Active Questionnaire](https://csep.ca/2021/01/20/pre-screening-for-physical-activity/)” and “[Permissions policy](https://csep.ca/contact-us/permissions/).” Accessed 2026.
8. US National Cancer Institute. “[Automated Self-Administered 24-Hour Dietary Assessment Tool](https://epi.grants.cancer.gov/asa24/index.html).” Accessed 2026.
9. Merz B, et al. “[Nutri-Score 2023 update](https://www.nature.com/articles/s43016-024-00920-3).” *Nature Food*. 2024;5:102–110. doi:10.1038/s43016-024-00920-3.
10. Swiss Federal Food Safety and Veterinary Office. “[Nutri-Score: Einfach ausgewogen essen](https://www.blv.admin.ch/de/nutri-score-de).” Accessed 2026.
11. WHO Regional Office for Europe. “[Nutrient Profile Model: second edition](https://www.who.int/malta/publications/i/item/WHO-EURO-2023-6894-46660-68492).” 2023. WHO-EURO-2023-6894-46660-68492.
12. Mozaffarian D, et al. “[Food Compass 2.0 is an improved nutrient profiling system to characterize healthfulness of foods and beverages](https://www.nature.com/articles/s43016-024-01053-3).” *Nature Food*. 2024.
13. Celis-Morales C, et al. “[Effect of personalized nutrition on health-related behaviour change: evidence from the Food4Me European randomized controlled trial](https://pubmed.ncbi.nlm.nih.gov/27524815/).” *International Journal of Epidemiology*. 2017. doi:10.1093/ije/dyw186.
14. Jinnette R, et al. “[Does Personalized Nutrition Advice Improve Dietary Intake in Healthy Adults? A Systematic Review of Randomized Controlled Trials](https://pubmed.ncbi.nlm.nih.gov/33313795/).” *Advances in Nutrition*. 2021;12(3):657–669. doi:10.1093/advances/nmaa144.
15. Swiss Federal Food Safety and Veterinary Office. “[Information on food labels](https://www.blv.admin.ch/en/food-labelling).” Accessed 2026.
16. Swiss Sports Nutrition Society. “[Food pyramid for athletes](https://www.ssns.ch/sportsnutrition/lebensmittelpyramide-fuer-sportlerinnen/).” Accessed 2026. The original pyramid has separate electronic-use restrictions and is not reproduced here.
17. Kohanmoo A, et al. “[Effect of short- and long-term protein consumption on appetite and appetite-regulating gastrointestinal hormones: a systematic review and meta-analysis of randomized controlled trials](https://pubmed.ncbi.nlm.nih.gov/32768415/).” *Physiology & Behavior*. 2020.
18. Clark MJ, Slavin JL. “[The effect of fiber on satiety and food intake: a systematic review](https://pubmed.ncbi.nlm.nih.gov/23885994/).” *Journal of the American College of Nutrition*. 2013;32(3):200–211.
19. Andres A, et al. “[Portion Size and Energy Intake: A Systematic Review](https://pubmed.ncbi.nlm.nih.gov/39836778/).” USDA Nutrition Evidence Systematic Review. 2024. doi:10.52570/NESR.DGAC2025.SR28.
20. Jäger R, et al. “[International Society of Sports Nutrition Position Stand: protein and exercise](https://pubmed.ncbi.nlm.nih.gov/28642676/).” *Journal of the International Society of Sports Nutrition*. 2017;14:20.
21. European Food Safety Authority. “[EFSA sets population reference intakes for protein](https://www.efsa.europa.eu/en/press/news/120209).” 2012.
22. Kerksick CM, et al. “[International Society of Sports Nutrition Position Stand: nutrient timing](https://pubmed.ncbi.nlm.nih.gov/28919842/).” *Journal of the International Society of Sports Nutrition*. 2017;14:33.
23. Swiss Federal Food Safety and Veterinary Office. “[Nutrition and health claims](https://www.blv.admin.ch/en/nutrition-and-health-claims).” Accessed 2026.
24. Swissmedic. “[Medical Device Software](https://www.swissmedic.ch/dam/swissmedic/en/dokumente/medizinprodukte/mep_urr/bw630_30_007d_mbmedizinprodukte-software.pdf.download.pdf/BW630_30_007e_MB%20Medical%20Device%20Software.pdf).” Version 3.0, 10 April 2024.
25. Federal Data Protection and Information Commissioner. “[Wearables: smartwatches, fitness trackers, smart glasses](https://www.edoeb.admin.ch/en/smart-devices).” Accessed 2026.
