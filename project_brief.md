# My agent: FitCoach AI
One-liner: A conversational fitness coach that helps athletes and gym-goers plan custom workouts, log progress, compute training metrics, and visualize their fitness journey.

Tool coverage:
- Memory: Remembers user profile (fitness goals, body weight, injuries, available equipment, preferred schedule) across chat sessions.
- Tools: `search_exercises` (find exercise movements by muscle/equipment), `log_workout` (save completed sets/reps/weight), `get_workout_history` (fetch past performance logs).
- Catalog/UI: Renders workout routines as structured exercise cards and progress summaries/macro distributions as tables using A2UI.
- Image gen: Generates custom motivational workout completion posters, physique milestones, and targeted muscle group visual diagrams.
- Sandbox: Executes Python code to compute 1-Rep Max (1RM), BMR/TDEE, target heart rate zones, and macro splits.

Recommended for every project: memory, storage, tools, image generation, A2UI
Agent-specific / stretch (pick what fits): code sandbox for fitness calculations (1RM, BMR/TDEE, heart rate zones), Cloud Trace for observability
