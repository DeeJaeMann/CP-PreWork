# From Perl Weekly Challenge 247
# Secret Santa
#
# Secret Santa is a Christmas tradition in which members of a group
# are randomly assigned a person to whom they give a gift
#
# You are given a list of names.  Write a script that tries to team
# persons from different families
#
# The givers are randomly chosen but don't share family names with
# the receivers
#
# Ex 1:
#   input: ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar', 'Mrs. Anwar', 'Mr. Conway', 'Mr. Cross']
#   output: Mr. Conway -> Mr. Wall
#           Mr. Anwar -> Mrs. Wall
#           Mrs. Wall -> Mr. Anwar
#           Mr. Cross -> Mrs. Anwar
#           Mr. Wall -> Mr. Conway
#           Mrs. Anwar -> Mr. Cross
#
#One gift is given to a family member.
#
# Ex 2:
#Input: ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar']
#Output:
# 
#    Mr. Anwar -> Mr. Wall
#    Mr. Wall -> Mrs. Wall
#    Mrs. Wall -> Mr. Anwar
#
