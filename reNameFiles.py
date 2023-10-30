import os

# Get the current directory
current_directory = os.getcwd()

# Iterate through all the files in the directory
for filename in os.listdir(current_directory):
    # Check if the file has a ".html" extension
    if filename.endswith(".html"):
        # Remove the ".html" extension
        new_filename = filename[:-5]
        # Rename the file
        os.rename(os.path.join(current_directory, filename), os.path.join(current_directory, new_filename))