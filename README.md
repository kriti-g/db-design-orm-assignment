# db-design-orm-assignment

Project Name: Recipes
Team Name: Database Design 16

Members:
Kriti Gurubacharya - Section 03, 
Jin Shutima Han - Section 03, 
Muran Huang - Section 03, 
Rachel Jiang - Section 04

Project Description: 
Our project focuses on a user platform where they can input their recipes and view other people’s recipes as well. The content of recipes range from ingredients and instructions to preparation and cooking time. From our interface, users are able to create their own account and navigate to a recipe list. From there, they have the ability to add their recipes to the list and edit their recipes by including the ingredients and measurements necessary. 

UML Class Diagram: https://github.com/kriti-g/db-design-orm-assignment/blob/master/UML%20diagram/db_design_final_project_UML.pdf 

Problem Statement: 
Our project targets people who are looking for new recipes to try during quarantine. Many households are making homecooked meals rather than going out to dine or picking up food due to COVID-19. Our purpose is to gather people who are willing to share their recipes or are interested in making Greek, Japanese, Taiwanese, Indian, or Brazilian cuisines. 

Solution Statement: 
To solve this problem, we have created a user interface where users can upload their recipes for others to try out. Additionally, users can navigate through the recipe list without creating a recipe. Our interface is family-friendly and available to new and professional cooks. 

User: 
User information includes first and last name, username, password, and email, which are all strings. Date of birth is stored as a date with no time information.

Recipe: 
Our recipes contain the cuisine type, name, description, preparation time and cook time. Each recipe has its own distinct ID, which will be useful as a foreign key for ingredient and instruction. The recipe cuisine type has choices of Greek, Indian, Taiwanese, Japanese and Brazilian cuisines. The name is a string of the original name of the food, such as ‘Spanakopita’, which is a Greek cuisine. The description is also a string and it explains what the food is in further detail. For example in the above example, it contains the name but translated to English, so users understand it better - 'Spanakopita' to ‘Spinach Pie’. Preparation and cook time are both integers, their value being in minutes. 

Ingredient: 
Our ingredients contain the name of the ingredient, measurement of the ingredient and the recipe ID, which is the foreign key to the recipe. The name of the ingredient is a string, such as ‘vanilla’, ‘rice’, and ‘masala’. Measurement of the ingredient is also a string as it describes the amount needed for the ingredient, such as ‘1 tbsp’, ‘100 grams’, ‘2 lbs’. The recipe ID would be the integer of the recipe ID the ingredient is referring to. 

Instruction: 
Our instructions contain the number of the steps to the recipe including the description and recipe ID, which is the foreign key to the recipe. The step of the instruction is an
integer. If the integer is 1, that means it is the first step of the recipe, and so on. The description of the instruction is a string that describes the step in detail, such as
‘Shape your cookies in a knot or make a double twist with a tube of dough’. The recipe ID would be the integer of the recipe ID the instruction is referring to. 

User to Domain Object Relationship: 
Our user and recipe, the domain object, are linked so users know the publisher of a specific recipe. On the user page, users are able to view other users’ recipes. Our user to recipe is a one to many relationship, where a user can create as many recipes as he or she wants. 

Domain Object to Domain Object Relationships: 
Our domain object to domain object focuses on the relationship between recipe to ingredients and recipe to instruction. Recipe is the foreign key of both the ingredient and instruction table. This means that ingredient and instruction both link back to the recipe. Additionally, as illustrated in the UML class diagram, recipe to ingredient has a one to many relationship, as well as recipe to instruction. This means that a recipe can have as many ingredients and instructions as it can. 

Portable Enumeration: 
CuisineType is our portable enumeration. Our recipe list is limited to Greek, Taiwanese, Japanese, Brazilian, and Indian cuisines. Users cannot input their own cuisine and are limited to these five cuisines. 

User Interface Requirements: 
In our web application, our users are first met with a page with a list of existing users, wherein they can create a new user using the form at the very top. Upon clicking on a user they are brought to the user's recipes page where they can create recipes associated with this user. Additionally, users can click on “Ingredients” to add to the list of ingredients needed for their recipe. All entries include inline editing, but an entry can be clicked on to see a full edit form page as well.
